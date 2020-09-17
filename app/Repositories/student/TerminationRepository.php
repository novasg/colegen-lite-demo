<?php
namespace App\Repositories\Student;

use Illuminate\Support\Str;
use App\Models\Student\StudentRecord;
use App\Repositories\Upload\UploadRepository;
use Illuminate\Validation\ValidationException;
use App\Repositories\Configuration\Academic\CourseGroupRepository;

class TerminationRepository
{
    protected $student_record;
    protected $course_group;
    protected $upload;
    protected $module = 'student_record';

    /**
     * Instantiate a new instance.
     *
     * @return void
     */
    public function __construct(
        StudentRecord $student_record,
        CourseGroupRepository $course_group,
        UploadRepository $upload
    ) {
        $this->student_record = $student_record;
        $this->course_group = $course_group;
        $this->upload = $upload;
    }

    /**
     * Get terminated student's filtered data
     *
     * @param array $params
     * @return StudentRecord
     */
    public function getData($params)
    {
        $sort_by              = gv($params, 'sort_by', 'date_of_exit');
        $order                = gv($params, 'order', 'desc');
        $batch_id             = gv($params, 'batch_id');
        $first_name           = gv($params, 'first_name');
        $last_name            = gv($params, 'last_name');
        $first_guardian_name  = gv($params, 'first_guardian_name');
        $second_guardian_name = gv($params, 'second_guardian_name');

        $date_of_exit_start_date = gv($params, 'date_of_exit_start_date');
        $date_of_exit_end_date   = gv($params, 'date_of_exit_end_date');

        $batch_id = is_array($batch_id) ? $batch_id : ($batch_id ? explode(',', $batch_id) : []);

        $query = $this->student_record->with('student', 'student.parent', 'admission', 'batch', 'batch.course')->filterBySession()->whereNotNull('date_of_exit')->filterByBatchesId($batch_id)->whereHas('student', function ($q) use ($first_name, $last_name, $first_guardian_name, $second_guardian_name) {
            $q->filterByFirstName($first_name)->filterByLastName($last_name);

            if ($first_guardian_name || $second_guardian_name) {
                $q->whereHas('parent', function ($q1) use ($first_guardian_name, $second_guardian_name) {
                    $q1->filterByFirstGuardianName($first_guardian_name)->filterBySecondGuardianName($second_guardian_name);
                });
            }
        })->dateOfExitBetween([
                'start_date' => $date_of_exit_start_date,
                'end_date' => $date_of_exit_end_date
            ]);

        return $query->orderBy($sort_by, $order);
    }

    /**
     * Paginate terminated student records using given params.
     *
     * @param array $params
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function paginate($params)
    {
        $page_length = gv($params, 'page_length', config('config.page_length'));

        return $this->getData($params)->paginate($page_length);
    }

    /**
     * Get terminated student filtered data for printing
     *
     * @param array $params
     * @return StudentRecord
     */
    public function print($params)
    {
        return $this->getData($params)->get();
    }

    /**
     * Get student record filters.
     *
     * @return Array
     */
    public function getFilters()
    {
        $batches = $this->course_group->getBatchOption();

        return compact('batches');
    }

    /**
     * Terminate a student.
     *
     * @param StudentRecord $student_record
     * @param array $params
     */
    public function terminate(StudentRecord $student_record, $params)
    {
        $termination_reason = gv($params, 'termination_reason');

        $data = getVar('data');
        $student_termination_reasons = gv($data, 'student_termination_reasons', []);

        if (! in_array($termination_reason, $student_termination_reasons)) {
            throw ValidationException::withMessages(['termination_reason' => trans('general.invalid_input')]);
        }

        if ($student_record->date_of_exit) {
            throw ValidationException::withMessages(['message' => trans('general.invalid_action')]);
        }

        $date_of_termination = toDate(gv($params, 'date_of_termination'));
        $termination_remarks = gv($params, 'termination_remarks');

        if (toDate($student_record->date_of_entry) >= $date_of_termination) {
            throw ValidationException::withMessages(['message' => trans('student.date_of_termination_less_than_date_of_admission')]);
        }

        $multi_course = $this->student_record->filterBySession($student_record->academic_session_id)->whereStudentId($student_record->student_id)->whereNull('date_of_exit')->where('id','!=',$student_record->id)->count();

        if (! $multi_course && $student_record->Student->StudentRecords->where('date_of_entry', '>', toDate($student_record->date_of_entry))->whereNull('date_of_exit')->where('id', '!=', $student_record->id)->count()) {
            throw ValidationException::withMessages(['message' => trans('student.no_termination_allowed_in_intermediate_records')]);
        }

        $this->processUpload($student_record, $params);

        $student_record->termination_reason = $termination_reason;
        $student_record->date_of_exit = toDate($date_of_termination);
        $student_record->exit_remarks = $termination_remarks;
        $student_record->upload_token = $student_record->upload_token ? : gv($params, 'upload_token');
        $student_record->save();
    }

    /**
     * Upload attachment
     *
     * @param StudentRecord $student_record
     * @param array $params
     * @param string $action
     * @return void
     */
    public function processUpload(StudentRecord $student_record, $params = array(), $action = 'create')
    {
        $upload_token = gv($params, 'upload_token');

        if ($action === 'create') {
            $this->upload->store($this->module, $student_record->id, $upload_token);
        } else {
            $this->upload->update($this->module, $student_record->id, $upload_token);
        }
    }
}
