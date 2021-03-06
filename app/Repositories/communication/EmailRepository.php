<?php
namespace App\Repositories\Communication;

use Carbon\Carbon;
use App\Jobs\SendCommunicationEmail;
use App\Models\Employee\Employee;
use App\Models\Student\StudentRecord;
use App\Models\Communication\Communication;
use Illuminate\Validation\ValidationException;
use App\Repositories\Communication\CommunicationRepository;
use App\Repositories\Configuration\Employee\DepartmentRepository;
use App\Repositories\Configuration\Academic\CourseGroupRepository;
use App\Repositories\Configuration\Employee\EmployeeCategoryRepository;

class EmailRepository
{
    protected $employee_category;
    protected $department;
    protected $course_group;
    protected $student_record;
    protected $employee;
    protected $communication;

    /**
     * Instantiate a new instance.
     *
     * @return void
     */
    public function __construct(
        EmployeeCategoryRepository $employee_category,
        DepartmentRepository $department,
        CourseGroupRepository $course_group,
        StudentRecord $student_record,
        Employee $employee,
        CommunicationRepository $communication
    ) {
        $this->employee_category = $employee_category;
        $this->department = $department;
        $this->course_group = $course_group;
        $this->student_record = $student_record;
        $this->employee = $employee;
        $this->communication = $communication;
    }

    /**
     * Send Email
     *
     * @param array $params
     * @return null
     */
    public function submit($params = array())
    {
        $body     = cleanBody(gv($params, 'body'));
        $includes = gv($params, 'includes');
        $excludes = gv($params, 'excludes');

        $includes = explode("\n", $includes);
        $includes = array_filter($includes, 'trim');

        $excludes = explode("\n", $excludes);
        $excludes = array_filter($excludes, 'trim');

        $emails = $this->getAudienceEmail($params);

        foreach ($includes as $include) {
            $emails[] = $include;
        }

        $emails = array_filter($emails);
        $emails = array_diff($emails, $excludes);

        $validated_emails = array();
        foreach ($emails as $email) {
            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $validated_emails[] = $email;
            }
        }

        if (! $validated_emails) {
            throw ValidationException::withMessages(['message' => trans('communication.could_not_find_any_audience')]);
        }

        $params['recipient_emails'] = $validated_emails;
        $params['included_emails'] = $includes;
        $params['excluded_emails'] = $excludes;

        $options['individual_students'] = array_unique(gv($params, 'individual_students', []));
        $options['individual_employees'] = array_unique(gv($params, 'individual_employees', []));

        $communication = $this->communication->create($params);
        $communication->options = $options;
        $communication->save();

        $validated_emails = collect($validated_emails);

        SendCommunicationEmail::dispatch($validated_emails, $params);

        return count($validated_emails);
    }

    /**
     * Send Email
     *
     * @param array $params
     * @return array
     */
    public function getAudienceEmail($params = array())
    {
        $audience = gv($params, 'audience');

        $student_emails = array();
        if (in_array($audience, ['everyone','selected_course','selected_batch']) || gv($params, 'individual_students', [])) {
            $student_emails = $this->getStudentEmail($params);
        }

        $employee_emails = array();
        if (in_array($audience, ['everyone','selected_department','selected_employee_category']) || gv($params, 'individual_employees', [])) {
            $employee_emails = $this->getEmployeeEmail($params);
        }

        $emails = array_merge($student_emails, $employee_emails);

        $emails = array_unique($emails);

        return $emails;
    }

    public function getStudentEmail($params = array())
    {
        $course_id = gv($params, 'course_id');
        $batch_id  = gv($params, 'batch_id');
        $course_id = is_array($course_id) ? $course_id : ($course_id ? explode(',', $course_id) : []);
        $batch_id  = is_array($batch_id) ? $batch_id : ($batch_id ? explode(',', $batch_id) : []);
        $individual_students = array_unique(gv($params, 'individual_students', []));

        $include_alternate_email = gbv($params, 'include_alternate_email');

        $selected_student_record_ids = array();
        if (in_array(gv($params, 'audience'), ['selected_course', 'selected_batch'])) {
            $query = $this->student_record->filterBySession()->whereNull('date_of_exit');

            if (gv($params, 'audience') == 'selected_course') {
                $query->whereHas('batch', function ($q) use ($course_id) {
                    $q->whereIn('course_id', $course_id);
                });
            }

            if (gv($params, 'audience') == 'selected_batch') {
                $query->whereIn('batch_id', $batch_id);
            }

            $selected_student_record_ids = $query->get()->pluck('id')->all();
        }

        $individual_student_record_ids = $this->student_record->whereIn('id', $individual_students)->get()->pluck('id')->all();

        $total_student_record_ids = array_merge($selected_student_record_ids, $individual_student_record_ids);

        $student_records = $this->student_record->select(['id','student_id'])->with(['student:id,student_parent_id,email','student.parent:id,first_guardian_email,second_guardian_email'])->whereIn('id', $total_student_record_ids)->get();

        $emails = array();
        foreach ($student_records as $student_record) {
            $emails[] = $student_record->student->email;

            if ($include_alternate_email) {
                $emails[] = $student_record->student->parent->first_guardian_email;
                $emails[] = $student_record->student->parent->second_guardian_email;
            }
        }

        $emails = array_unique($emails);

        return $emails;
    }

    public function getEmployeeEmail($params = array())
    {
        $employee_category_id = gv($params, 'employee_category_id');
        $department_id        = gv($params, 'department_id');
        $employee_category_id = is_array($employee_category_id) ? $employee_category_id : ($employee_category_id ? explode(',', $employee_category_id) : []);
        $department_id        = is_array($department_id) ? $department_id : ($department_id ? explode(',', $department_id) : []);
        $individual_employees = array_unique(gv($params, 'individual_employees', []));

        $include_alternate_email = gbv($params, 'include_alternate_email');

        $include_alternate_number = gbv($params, 'include_alternate_number');

        $selected_employee_ids = array();
        if (in_array(gv($params, 'audience'), ['selected_employee_category', 'selected_department'])) {
            $query = $this->employee->whereHas('employeeTerms', function ($q) {
                $q->where(function ($q1) {
                    $q1->whereNull('date_of_leaving')->where('date_of_joining', '<=', date('Y-m-d'));
                })->orWhere(function ($q2) {
                    $q2->whereNotNull('date_of_leaving')->where('date_of_joining', '<=', date('Y-m-d'))->where('date_of_leaving', '>=', date('Y-m-d'));
                });
            });

            if (gv($params, 'audience') == 'selected_employee_category') {
                $query->whereHas('employeeDesignations', function ($q) use ($employee_category_id) {
                    $q->where('date_effective', '<=', date('Y-m-d'))->where(function ($q1) {
                        $q1->where('date_end', '=', null)->orWhere(function ($q2) {
                            $q2->where('date_end', '!=', null)->where('date_end', '>=', date('Y-m-d'));
                        });
                    })->whereHas('designation', function ($q) use ($employee_category_id) {
                        $q->whereHas('employeeCategory', function ($q1) use ($employee_category_id) {
                            $q1->whereIn('employee_category_id', $employee_category_id);
                        });
                    });
                });
            }

            if (gv($params, 'audience') == 'selected_department') {
                $query->whereHas('employeeDesignations', function ($q) use ($department_id) {
                    $q->where('date_effective', '<=', date('Y-m-d'))->where(function ($q1) {
                        $q1->where('date_end', '=', null)->orWhere(function ($q2) {
                            $q2->where('date_end', '!=', null)->where('date_end', '>=', date('Y-m-d'));
                        });
                    })->whereIn('department_id', $department_id);
                });
            }

            $selected_employee_ids = $query->get()->pluck('id')->all();
        }

        $individual_employee_ids = $this->employee->whereIn('id', $individual_employees)->get()->pluck('id')->all();

        $total_employee_ids = array_merge($selected_employee_ids, $individual_employee_ids);

        $employees = $this->employee->whereIn('id', $total_employee_ids)->select(['id','email','alternate_email'])->get();

        $emails = array();
        foreach ($employees as $employee) {
            $emails[] = $employee->email;

            if ($include_alternate_email) {
                $emails[] = $employee->alternate_email;
            }
        }

        $emails = array_unique($emails);

        return $emails;
    }
}
