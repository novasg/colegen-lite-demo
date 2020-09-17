<?php
namespace App\Repositories;

use Carbon\Carbon;
use App\Models\Post\Article;
use App\Models\Utility\Todo;
use App\Models\Academic\Batch;
use App\Models\Calendar\Event;
use App\Models\Academic\Course;
use App\Models\Student\Student;
use App\Models\Calendar\Holiday;
use App\Models\Employee\Employee;
use Illuminate\Validation\ValidationException;

class HomeRepository
{
    protected $batch;
    protected $course;
    protected $student;
    protected $employee;
    protected $article;
    protected $holiday;
    protected $todo;
    protected $event;

    /**
     * Instantiate a new instance.
     *
     * @return void
     */
    public function __construct(
        Batch $batch,
        Course $course,
        Student $student,
        Employee $employee,
        Article $article,
        Holiday $holiday,
        Todo $todo,
        Event $event
    ) {
        $this->batch = $batch;
        $this->course = $course;
        $this->student = $student;
        $this->employee = $employee;
        $this->article = $article;
        $this->holiday = $holiday;
        $this->todo = $todo;
        $this->event = $event;
    }

    /**
     * Get dashboard data.
     *
     * @return Array
     */
    public function getData()
    {
        $student_birthday_count = $this->student->whereHas('studentRecords', function ($q) {
            $q->whereNull('date_of_exit')->filterBySession();
        })->whereRaw('DATE_FORMAT(date_of_birth, "%m-%d") = ?', [Carbon::now()->format('m-d')])->count();

        $employee_birthday_count = $this->employee->whereHas('employeeTerms', function ($q) {
            $q->whereNull('date_of_leaving');
        })->whereRaw('DATE_FORMAT(date_of_birth, "%m-%d") = ?', [Carbon::now()->format('m-d')])->count();

        $birthday_count = $student_birthday_count + $employee_birthday_count;

        $anniversary_count = $this->employee->whereHas('employeeTerms', function ($q) {
            $q->whereNull('date_of_leaving');
        })->whereRaw('DATE_FORMAT(date_of_anniversary, "%m-%d") = ?', [Carbon::now()->format('m-d')])->count();

        $work_anniversary_count = $this->employee->whereHas('employeeTerms', function ($q) {
            $q->whereNull('date_of_leaving')->whereRaw('DATE_FORMAT(date_of_joining, "%m-%d") = ?', [Carbon::now()->format('m-d')]);
        })->count();

        $articles = \Auth::user()->can('list-article') ? $this->article->with('articleType')->filterBySession()->orderBy('date_of_article', 'desc')->take(5)->get() : [];


        $events = array();
        if (\Auth::user()->can('list-event')) {
            $event_query =  $this->event->with('eventType')->filterBySession()->where('start_date','>=',date('Y-m-d'));

            if (\Auth::user()->hasAnyRole([config('system.default_role.student'), config('system.default_role.parent')])) {
                $event_query->whereIn('audience',['everyone','selected_course','selected_batch']);
            }

            $events = $event_query->orderBy('start_date', 'asc')->take(5)->get();
        }

        return compact('birthday_count', 'anniversary_count', 'work_anniversary_count', 'articles','events');
    }

    /**
     * Get dashboard chart data.
     *
     * @param Array $params
     * @return Array
     */
    public function getStudentStrengthChartData($params = array())
    {
        if (! \Auth::user()->hasAnyRole([
            config('system.default_role.admin'),
            config('system.default_role.manager'),
            config('system.default_role.principal'),
        ])) {
            return [];
        }

        $strength_chart_type = gv($params, 'strength_chart_type', 'course');

        $chart_data = array();
        $batches = $this->batch->with('course')->withCount(['studentRecords' => function ($q) {
            $q->whereNull('date_of_exit');
        }])->filterBySession()->get();

        $total = 0;
        foreach ($batches as $batch) {
            $total += $batch->student_records_count;
            $chart_data[$batch->course->name.' '.$batch->name] = $batch->student_records_count;
        }

        $batches = $chart_data;

        if ($strength_chart_type == 'course') {
            $chart_data = array();
            $courses = $this->course->with('batches')->filterBySession()->get();

            foreach ($courses as $course) {
                $strength = 0;
                foreach ($course->batches as $batch) {
                    $strength += gv($batches, $course->name.' '.$batch->name);
                }

                $chart_data[$course->name] = $strength;
            }
        }

        $strength = $this->getChartData($chart_data);

        return compact('strength','total');
    }

    public function getChartData($chart_data)
    {
        return [
            'labels' => array_keys($chart_data),
            'datasets' => [
                [
                    'label' => trans('student.strength'),
                    'backgroundColor' => '#f87979',
                    'data' => array_values($chart_data)
                ]
            ]
        ];
    }

    /**
     * Get dashboard event data.
     *
     * @param Array $params
     * @return Array
     */
    public function getCalendarEventData($params = array())
    {
        $holidays = $this->holiday->all();

        $todos = $this->todo->filterByUserId(\Auth::user()->id)->whereStatus(0)->get();

        $event_query = $this->event->filterBySession();

        if (\Auth::user()->hasAnyRole([config('system.default_role.student'), config('system.default_role.parent')])) {
            $event_query->whereIn('audience',['everyone','selected_course','selected_batch']);
        }

        $events = $event_query->get();

        return compact('holidays','todos','events');
    }
}
