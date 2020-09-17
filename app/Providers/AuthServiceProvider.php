<?php

namespace App\Providers;

use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\User'                                          => 'App\Policies\UserPolicy',
        'App\Models\Utility\Todo'                           => 'App\Policies\Utility\TodoPolicy',
        'App\Models\Academic\AcademicSession'               => 'App\Policies\Academic\AcademicSessionPolicy',
        'App\Models\Finance\Account'                        => 'App\Policies\Finance\AccountPolicy',
        'App\Models\Academic\Course'                        => 'App\Policies\Academic\CoursePolicy',
        'App\Models\Academic\Batch'                         => 'App\Policies\Academic\BatchPolicy',
        'App\Models\Academic\ClassTeacher'                  => 'App\Policies\Academic\ClassTeacherPolicy',
        'App\Models\Academic\SubjectTeacher'                => 'App\Policies\Academic\SubjectTeacherPolicy',
        'App\Models\Academic\Subject'                       => 'App\Policies\Academic\SubjectPolicy',
        'App\Models\Student\Registration'                   => 'App\Policies\Student\RegistrationPolicy',
        'App\Models\Student\Student'                        => 'App\Policies\Student\StudentPolicy',
        'App\Models\Student\StudentParent'                  => 'App\Policies\Student\StudentParentPolicy',
        'App\Models\Employee\Employee'                      => 'App\Policies\Employee\EmployeePolicy',
        'App\Models\Finance\Transaction\Transaction'        => 'App\Policies\Finance\Transaction\TransactionPolicy',
        'App\Models\Finance\Fee\FeeGroup'                   => 'App\Policies\Finance\Fee\FeeGroupPolicy',
        'App\Models\Finance\Fee\FeeConcession'              => 'App\Policies\Finance\Fee\FeeConcessionPolicy',
        'App\Models\Finance\Fee\FeeHead'                    => 'App\Policies\Finance\Fee\FeeHeadPolicy',
        'App\Models\Finance\Fee\FeeAllocation'              => 'App\Policies\Finance\Fee\FeeAllocationPolicy',
        'App\Models\Transport\TransportCircle'              => 'App\Policies\Transport\TransportCirclePolicy',
        'App\Models\Transport\TransportFee'                 => 'App\Policies\Transport\TransportFeePolicy',
        'App\Models\Student\StudentRecord'                  => 'App\Policies\Student\StudentRecordPolicy',
        'App\Models\Calendar\Holiday'                       => 'App\Policies\Calendar\HolidayPolicy',
        'App\Models\Calendar\Event'                         => 'App\Policies\Calendar\EventPolicy',
        'App\Models\Post\Article'                           => 'App\Policies\Post\ArticlePolicy',
        'App\Models\Reception\VisitorLog'                   => 'App\Policies\Reception\VisitorLogPolicy',
        'App\Models\Reception\Complaint'                    => 'App\Policies\Reception\ComplaintPolicy',
        'App\Models\Reception\CallLog'                      => 'App\Policies\Reception\CallLogPolicy',
        'App\Models\Reception\PostalRecord'                 => 'App\Policies\Reception\PostalRecordPolicy',
        'App\Models\Reception\GatePass'                     => 'App\Policies\Reception\GatePassPolicy',
        'App\Models\Reception\Enquiry'                      => 'App\Policies\Reception\EnquiryPolicy',
        'App\Models\Student\StudentAttendance'              => 'App\Policies\Student\StudentAttendancePolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
