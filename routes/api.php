<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
 */

// Guest Routes

Route::get('/install/pre-requisite', 'InstallController@preRequisite');
Route::post('/install/validate/{option}', 'InstallController@store');
Route::post('/install', 'InstallController@store');

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', 'Auth\AuthController@login')->name('login');
    Route::post('/login/otp', 'Auth\AuthController@otp');
    Route::post('/check', 'Auth\AuthController@check');
    Route::post('/password', 'Auth\AuthController@password');
    Route::post('/validate-password-reset', 'Auth\AuthController@validatePasswordReset');
    Route::post('/reset', 'Auth\AuthController@reset');
});

Route::get('/config', 'Configuration\ConfigurationController@getConfig');

Route::group(['middleware' => ['auth:api']], function () {

    // Authentication Routes
    Route::post('/demo/message', 'HomeController@demoMessage');
    Route::post('/auth/refresh', 'Auth\AuthController@refresh');
    Route::post('/auth/me', 'Auth\AuthController@me');
    Route::post('/auth/logout', 'Auth\AuthController@logout');
    Route::post('/auth/lock', 'Auth\AuthController@lock');
    Route::post('/auth/security', 'Auth\AuthController@security');
    Route::post('/change/password', 'Auth\AuthController@changePassword');
    Route::post('/user/preference', 'Auth\UserController@preference');
    Route::get('/user/preference/pre-requisite', 'Auth\UserController@preferencePreRequisite');

    // Upload Routes
    Route::post('/upload', 'Upload\UploadController@upload');
    Route::post('/upload/extension', 'Upload\UploadController@getAllowedExtension');
    Route::post('/upload/image', 'Upload\UploadController@uploadImage');
    Route::post('/upload/fetch', 'Upload\UploadController@fetch');
    Route::post('/upload/{id}', 'Upload\UploadController@destroy');

    // Dashboard & Report Routes
    Route::get('/dashboard', 'HomeController@dashboard');
    Route::post('/dashboard/calendar/event', 'HomeController@calendarEvents');
    Route::post('/dashboard/student/strength/chart', 'HomeController@studentStrengthChart');
    Route::get('/search', 'HomeController@search');

    /*
             * Configuration Routes Start
    */
    Route::get('/configuration/variable', 'Configuration\ConfigurationController@getConfigurationVariable');
    Route::get('/configuration', 'Configuration\ConfigurationController@index');
    Route::post('/configuration', 'Configuration\ConfigurationController@store');
    Route::post('/configuration/{type}', 'Configuration\ConfigurationController@uploadImage');
    Route::delete('/configuration/{type}/remove', 'Configuration\ConfigurationController@removeImage');
    Route::get('/fetch/lists', 'Configuration\ConfigurationController@fetchList');
    Route::post('/setup/wizard', 'Configuration\ConfigurationController@setupWizard');

    Route::get('/role/employee/list', 'Configuration\RoleController@employeeRoleList');
    
    Route::get('/permission/pre-requisite', 'Configuration\PermissionController@preRequisite');
    Route::get('/permission/{module}/pre-requisite', 'Configuration\PermissionController@modulePreRequisite');
    Route::post('/permission', 'Configuration\PermissionController@assignPermission');
    Route::post('/permission/module', 'Configuration\PermissionController@assignModulePermission');
    /*
             * Configuration Routes End
    */

    /*
             * Utility Routes Start
    */
    Route::get('/todo', 'Utility\TodoController@index');
    Route::get('/todo/today', 'Utility\TodoController@getTodoOfToday');
    Route::get('/todo/{id}', 'Utility\TodoController@show');
    Route::post('/todo', 'Utility\TodoController@store');
    Route::patch('/todo/{id}', 'Utility\TodoController@update');
    Route::delete('/todo/{id}', 'Utility\TodoController@destroy');
    Route::post('/todo/{id}/status', 'Utility\TodoController@toggleStatus');
    /*
             * Utility Routes End
    */

    /*
             * Misc Routes Start
    */
    Route::get('/academic/course/group', 'Configuration\Academic\CourseGroupController@index');
    Route::get('/academic/course/group/{id}', 'Configuration\Academic\CourseGroupController@show');
    Route::post('/academic/course/group', 'Configuration\Academic\CourseGroupController@store');
    Route::post('/academic/course/group/reorder', 'Configuration\Academic\CourseGroupController@reorder');
    Route::post('/academic/course/group/print', 'Configuration\Academic\CourseGroupController@print');
    Route::post('/academic/course/group/pdf', 'Configuration\Academic\CourseGroupController@pdf');
    Route::patch('/academic/course/group/{id}', 'Configuration\Academic\CourseGroupController@update');
    Route::delete('/academic/course/group/{id}', 'Configuration\Academic\CourseGroupController@destroy');

    Route::get('/student/document/type', 'Configuration\Student\StudentDocumentTypeController@index');
    Route::get('/student/document/type/{id}', 'Configuration\Student\StudentDocumentTypeController@show');
    Route::post('/student/document/type', 'Configuration\Student\StudentDocumentTypeController@store');
    Route::post('/student/document/type/print', 'Configuration\Student\StudentDocumentTypeController@print');
    Route::post('/student/document/type/pdf', 'Configuration\Student\StudentDocumentTypeController@pdf');
    Route::patch('/student/document/type/{id}', 'Configuration\Student\StudentDocumentTypeController@update');
    Route::delete('/student/document/type/{id}', 'Configuration\Student\StudentDocumentTypeController@destroy');

    Route::get('/student/group', 'Configuration\Student\StudentGroupController@index');
    Route::get('/student/group/{id}', 'Configuration\Student\StudentGroupController@show');
    Route::post('/student/group', 'Configuration\Student\StudentGroupController@store');
    Route::post('/student/group/print', 'Configuration\Student\StudentGroupController@print');
    Route::post('/student/group/pdf', 'Configuration\Student\StudentGroupController@pdf');
    Route::patch('/student/group/{id}', 'Configuration\Student\StudentGroupController@update');
    Route::delete('/student/group/{id}', 'Configuration\Student\StudentGroupController@destroy');

    Route::get('/employee/group', 'Configuration\Employee\EmployeeGroupController@index');
    Route::get('/employee/group/{id}', 'Configuration\Employee\EmployeeGroupController@show');
    Route::post('/employee/group', 'Configuration\Employee\EmployeeGroupController@store');
    Route::post('/employee/group/print', 'Configuration\Employee\EmployeeGroupController@print');
    Route::post('/employee/group/pdf', 'Configuration\Employee\EmployeeGroupController@pdf');
    Route::patch('/employee/group/{id}', 'Configuration\Employee\EmployeeGroupController@update');
    Route::delete('/employee/group/{id}', 'Configuration\Employee\EmployeeGroupController@destroy');

    Route::get('/employee/document/type', 'Configuration\Employee\EmployeeDocumentTypeController@index');
    Route::get('/employee/document/type/{id}', 'Configuration\Employee\EmployeeDocumentTypeController@show');
    Route::post('/employee/document/type', 'Configuration\Employee\EmployeeDocumentTypeController@store');
    Route::post('/employee/document/type/print', 'Configuration\Employee\EmployeeDocumentTypeController@print');
    Route::post('/employee/document/type/pdf', 'Configuration\Employee\EmployeeDocumentTypeController@pdf');
    Route::patch('/employee/document/type/{id}', 'Configuration\Employee\EmployeeDocumentTypeController@update');
    Route::delete('/employee/document/type/{id}', 'Configuration\Employee\EmployeeDocumentTypeController@destroy');

    Route::get('/employee/category', 'Configuration\Employee\EmployeeCategoryController@index');
    Route::get('/employee/category/{id}', 'Configuration\Employee\EmployeeCategoryController@show');
    Route::post('/employee/category', 'Configuration\Employee\EmployeeCategoryController@store');
    Route::post('/employee/category/print', 'Configuration\Employee\EmployeeCategoryController@print');
    Route::post('/employee/category/pdf', 'Configuration\Employee\EmployeeCategoryController@pdf');
    Route::patch('/employee/category/{id}', 'Configuration\Employee\EmployeeCategoryController@update');
    Route::delete('/employee/category/{id}', 'Configuration\Employee\EmployeeCategoryController@destroy');

    Route::get('/employee/department', 'Configuration\Employee\DepartmentController@index');
    Route::get('/employee/department/{id}', 'Configuration\Employee\DepartmentController@show');
    Route::post('/employee/department', 'Configuration\Employee\DepartmentController@store');
    Route::post('/employee/department/print', 'Configuration\Employee\DepartmentController@print');
    Route::post('/employee/department/pdf', 'Configuration\Employee\DepartmentController@pdf');
    Route::patch('/employee/department/{id}', 'Configuration\Employee\DepartmentController@update');
    Route::delete('/employee/department/{id}', 'Configuration\Employee\DepartmentController@destroy');

    Route::get('/employee/designation/pre-requisite', 'Configuration\Employee\DesignationController@preRequisite');
    Route::get('/employee/designation', 'Configuration\Employee\DesignationController@index');
    Route::get('/employee/designation/{id}', 'Configuration\Employee\DesignationController@show');
    Route::post('/employee/designation', 'Configuration\Employee\DesignationController@store');
    Route::post('/employee/designation/print', 'Configuration\Employee\DesignationController@print');
    Route::post('/employee/designation/pdf', 'Configuration\Employee\DesignationController@pdf');
    Route::patch('/employee/designation/{id}', 'Configuration\Employee\DesignationController@update');
    Route::delete('/employee/designation/{id}', 'Configuration\Employee\DesignationController@destroy');

    Route::get('/finance/payment/method', 'Configuration\Finance\Transaction\PaymentMethodController@index');
    Route::get('/finance/payment/method/{id}', 'Configuration\Finance\Transaction\PaymentMethodController@show');
    Route::post('/finance/payment/method', 'Configuration\Finance\Transaction\PaymentMethodController@store');
    Route::post('/finance/payment/method/print', 'Configuration\Finance\Transaction\PaymentMethodController@print');
    Route::post('/finance/payment/method/pdf', 'Configuration\Finance\Transaction\PaymentMethodController@pdf');
    Route::patch('/finance/payment/method/{id}', 'Configuration\Finance\Transaction\PaymentMethodController@update');
    Route::delete('/finance/payment/method/{id}', 'Configuration\Finance\Transaction\PaymentMethodController@destroy');

    Route::get('/calendar/event/type', 'Configuration\Calendar\EventTypeController@index');
    Route::get('/calendar/event/type/{id}', 'Configuration\Calendar\EventTypeController@show');
    Route::post('/calendar/event/type', 'Configuration\Calendar\EventTypeController@store');
    Route::post('/calendar/event/type/print', 'Configuration\Calendar\EventTypeController@print');
    Route::post('/calendar/event/type/pdf', 'Configuration\Calendar\EventTypeController@pdf');
    Route::patch('/calendar/event/type/{id}', 'Configuration\Calendar\EventTypeController@update');
    Route::delete('/calendar/event/type/{id}', 'Configuration\Calendar\EventTypeController@destroy');

    Route::get('/post/article/type', 'Configuration\Post\ArticleTypeController@index');
    Route::get('/post/article/type/{id}', 'Configuration\Post\ArticleTypeController@show');
    Route::post('/post/article/type', 'Configuration\Post\ArticleTypeController@store');
    Route::post('/post/article/type/print', 'Configuration\Post\ArticleTypeController@print');
    Route::post('/post/article/type/pdf', 'Configuration\Post\ArticleTypeController@pdf');
    Route::patch('/post/article/type/{id}', 'Configuration\Post\ArticleTypeController@update');
    Route::delete('/post/article/type/{id}', 'Configuration\Post\ArticleTypeController@destroy');

    Route::get('/reception/enquiry/type', 'Configuration\Reception\EnquiryTypeController@index');
    Route::get('/reception/enquiry/type/{id}', 'Configuration\Reception\EnquiryTypeController@show');
    Route::post('/reception/enquiry/type', 'Configuration\Reception\EnquiryTypeController@store');
    Route::post('/reception/enquiry/type/print', 'Configuration\Reception\EnquiryTypeController@print');
    Route::post('/reception/enquiry/type/pdf', 'Configuration\Reception\EnquiryTypeController@pdf');
    Route::patch('/reception/enquiry/type/{id}', 'Configuration\Reception\EnquiryTypeController@update');
    Route::delete('/reception/enquiry/type/{id}', 'Configuration\Reception\EnquiryTypeController@destroy');

    Route::get('/reception/complaint/type', 'Configuration\Reception\ComplaintTypeController@index');
    Route::get('/reception/complaint/type/{id}', 'Configuration\Reception\ComplaintTypeController@show');
    Route::post('/reception/complaint/type', 'Configuration\Reception\ComplaintTypeController@store');
    Route::post('/reception/complaint/type/print', 'Configuration\Reception\ComplaintTypeController@print');
    Route::post('/reception/complaint/type/pdf', 'Configuration\Reception\ComplaintTypeController@pdf');
    Route::patch('/reception/complaint/type/{id}', 'Configuration\Reception\ComplaintTypeController@update');
    Route::delete('/reception/complaint/type/{id}', 'Configuration\Reception\ComplaintTypeController@destroy');

    Route::get('/reception/enquiry/source', 'Configuration\Reception\EnquirySourceController@index');
    Route::get('/reception/enquiry/source/{id}', 'Configuration\Reception\EnquirySourceController@show');
    Route::post('/reception/enquiry/source', 'Configuration\Reception\EnquirySourceController@store');
    Route::post('/reception/enquiry/source/print', 'Configuration\Reception\EnquirySourceController@print');
    Route::post('/reception/enquiry/source/pdf', 'Configuration\Reception\EnquirySourceController@pdf');
    Route::patch('/reception/enquiry/source/{id}', 'Configuration\Reception\EnquirySourceController@update');
    Route::delete('/reception/enquiry/source/{id}', 'Configuration\Reception\EnquirySourceController@destroy');

    Route::get('/reception/visiting/purpose', 'Configuration\Reception\VisitingPurposeController@index');
    Route::get('/reception/visiting/purpose/{id}', 'Configuration\Reception\VisitingPurposeController@show');
    Route::post('/reception/visiting/purpose', 'Configuration\Reception\VisitingPurposeController@store');
    Route::post('/reception/visiting/purpose/print', 'Configuration\Reception\VisitingPurposeController@print');
    Route::post('/reception/visiting/purpose/pdf', 'Configuration\Reception\VisitingPurposeController@pdf');
    Route::patch('/reception/visiting/purpose/{id}', 'Configuration\Reception\VisitingPurposeController@update');
    Route::delete('/reception/visiting/purpose/{id}', 'Configuration\Reception\VisitingPurposeController@destroy');

    Route::get('/reception/calling/purpose', 'Configuration\Reception\CallingPurposeController@index');
    Route::get('/reception/calling/purpose/{id}', 'Configuration\Reception\CallingPurposeController@show');
    Route::post('/reception/calling/purpose', 'Configuration\Reception\CallingPurposeController@store');
    Route::post('/reception/calling/purpose/print', 'Configuration\Reception\CallingPurposeController@print');
    Route::post('/reception/calling/purpose/pdf', 'Configuration\Reception\CallingPurposeController@pdf');
    Route::patch('/reception/calling/purpose/{id}', 'Configuration\Reception\CallingPurposeController@update');
    Route::delete('/reception/calling/purpose/{id}', 'Configuration\Reception\CallingPurposeController@destroy');

    /*
             * Academic Routes Start
    */
    Route::get('/academic/session/pre-requisite', 'Academic\AcademicSessionController@preRequisite');
    Route::get('/academic/session', 'Academic\AcademicSessionController@index');
    Route::get('/academic/session/{id}', 'Academic\AcademicSessionController@show');
    Route::post('/academic/session', 'Academic\AcademicSessionController@store');
    Route::post('/academic/session/print', 'Academic\AcademicSessionController@print');
    Route::post('/academic/session/pdf', 'Academic\AcademicSessionController@pdf');
    Route::post('/academic/session/import', 'Academic\AcademicSessionController@import');
    Route::post('/academic/session/{id}/user/default', 'Academic\AcademicSessionController@userDefault');
    Route::patch('/academic/session/{id}', 'Academic\AcademicSessionController@update');
    Route::delete('/academic/session/{id}', 'Academic\AcademicSessionController@destroy');

    Route::get('/course/pre-requisite', 'Academic\CourseController@preRequisite');
    Route::get('/course', 'Academic\CourseController@index');
    Route::get('/course/{id}', 'Academic\CourseController@show');
    Route::post('/course', 'Academic\CourseController@store');
    Route::post('/course/reorder', 'Academic\CourseController@reorder');
    Route::post('/course/{id}/batch/reorder', 'Academic\CourseController@batchReorder');
    Route::post('/course/print', 'Academic\CourseController@print');
    Route::post('/course/pdf', 'Academic\CourseController@pdf');
    Route::patch('/course/{id}', 'Academic\CourseController@update');
    Route::delete('/course/{id}', 'Academic\CourseController@destroy');

    Route::get('/batch/pre-requisite', 'Academic\BatchController@preRequisite');
    Route::get('/batch', 'Academic\BatchController@index');
    Route::get('/batch/{id}', 'Academic\BatchController@show');
    Route::post('/batch', 'Academic\BatchController@store');
    Route::post('/batch/print', 'Academic\BatchController@print');
    Route::post('/batch/pdf', 'Academic\BatchController@pdf');
    Route::patch('/batch/{id}', 'Academic\BatchController@update');
    Route::post('/batch/{id}/subject/reorder', 'Academic\BatchController@subjectReorder');
    Route::post('/batch/{id}/strength', 'Academic\BatchController@fetchStrength');
    Route::post('/batch/{id}/subjects', 'Academic\BatchController@fetchSubjects');
    Route::delete('/batch/{id}', 'Academic\BatchController@destroy');

    Route::get('/subject/teacher', 'Academic\SubjectTeacherController@index');
    Route::post('/subject/teacher', 'Academic\SubjectTeacherController@store');
    Route::post('/subject/teacher/print', 'Academic\SubjectTeacherController@print');
    Route::post('/subject/teacher/pdf', 'Academic\SubjectTeacherController@pdf');
    Route::post('/subject/teacher/{batch_id}', 'Academic\SubjectTeacherController@getSubjects');
    Route::delete('/subject/teacher/{id}', 'Academic\SubjectTeacherController@destroy');

    Route::get('/subject/pre-requisite', 'Academic\SubjectController@preRequisite');
    Route::get('/subject', 'Academic\SubjectController@index');
    Route::get('/subject/{id}', 'Academic\SubjectController@show');
    Route::post('/subject', 'Academic\SubjectController@store');
    Route::post('/subject/print', 'Academic\SubjectController@print');
    Route::post('/subject/pdf', 'Academic\SubjectController@pdf');
    Route::post('/subject/{batch_id}/copy', 'Academic\SubjectController@copy');
    Route::patch('/subject/{id}', 'Academic\SubjectController@update');
    Route::delete('/subject/{id}', 'Academic\SubjectController@destroy');
    Route::delete('/subject/{batch_id}/delete', 'Academic\SubjectController@destroyBatch');

    Route::get('/class-teacher', 'Academic\ClassTeacherController@list');
    Route::get('/class/teacher', 'Academic\ClassTeacherController@index');
    Route::post('/class/teacher', 'Academic\ClassTeacherController@store');
    Route::post('/class/teacher/print', 'Academic\ClassTeacherController@print');
    Route::post('/class/teacher/pdf', 'Academic\ClassTeacherController@pdf');
    Route::delete('/class/teacher/{id}', 'Academic\ClassTeacherController@destroy');
    /*
             * Academic Routes End
    */

    /*
             * Finance Routes Start
    */
    Route::get('/account', 'Finance\AccountController@index');
    Route::get('/account/{id}', 'Finance\AccountController@show');
    Route::post('/account', 'Finance\AccountController@store');
    Route::post('/account/print', 'Finance\AccountController@print');
    Route::post('/account/pdf', 'Finance\AccountController@pdf');
    Route::patch('/account/{id}', 'Finance\AccountController@update');
    Route::delete('/account/{id}', 'Finance\AccountController@destroy');

    Route::get('/fee/group', 'Finance\Fee\FeeGroupController@index');
    Route::get('/fee/group/{id}', 'Finance\Fee\FeeGroupController@show');
    Route::post('/fee/group', 'Finance\Fee\FeeGroupController@store');
    Route::post('/fee/group/print', 'Finance\Fee\FeeGroupController@print');
    Route::post('/fee/group/pdf', 'Finance\Fee\FeeGroupController@pdf');
    Route::patch('/fee/group/{id}', 'Finance\Fee\FeeGroupController@update');
    Route::delete('/fee/group/{id}', 'Finance\Fee\FeeGroupController@destroy');

    Route::get('/fee/head/pre-requisite', 'Finance\Fee\FeeHeadController@preRequisite');
    Route::get('/fee/head', 'Finance\Fee\FeeHeadController@index');
    Route::get('/fee/head/{id}', 'Finance\Fee\FeeHeadController@show');
    Route::post('/fee/head', 'Finance\Fee\FeeHeadController@store');
    Route::post('/fee/head/print', 'Finance\Fee\FeeHeadController@print');
    Route::post('/fee/head/pdf', 'Finance\Fee\FeeHeadController@pdf');
    Route::patch('/fee/head/{id}', 'Finance\Fee\FeeHeadController@update');
    Route::delete('/fee/head/{id}', 'Finance\Fee\FeeHeadController@destroy');

    Route::get('/fee/allocation/pre-requisite', 'Finance\Fee\FeeAllocationController@preRequisite');
    Route::get('/fee/allocation', 'Finance\Fee\FeeAllocationController@index');
    Route::get('/fee/allocation/{uuid}', 'Finance\Fee\FeeAllocationController@show');
    Route::post('/fee/allocation', 'Finance\Fee\FeeAllocationController@store');
    Route::post('/fee/allocation/print', 'Finance\Fee\FeeAllocationController@print');
    Route::post('/fee/allocation/pdf', 'Finance\Fee\FeeAllocationController@pdf');
    Route::patch('/fee/allocation/{uuid}', 'Finance\Fee\FeeAllocationController@update');
    Route::delete('/fee/allocation/{uuid}', 'Finance\Fee\FeeAllocationController@destroy');

    Route::get('/fee/allocation/show/pre-requisite', 'Finance\Fee\FeeAllocationController@showPreRequisite');
    Route::post('/fee/allocation/{uuid}/print', 'Finance\Fee\FeeAllocationController@printDetail');
    Route::post('/fee/allocation/{uuid}/pdf', 'Finance\Fee\FeeAllocationController@pdfDetail');
    Route::post('/fee/allocation/{uuid}/copy', 'Finance\Fee\FeeAllocationController@copy');

    Route::get('/fee/installment/pre-requisite', 'Finance\Fee\FeeInstallmentController@preRequisite');
    Route::get('/fee/installment/{uuid}', 'Finance\Fee\FeeInstallmentController@show');
    Route::patch('/fee/installment/{uuid}', 'Finance\Fee\FeeInstallmentController@update');

    Route::get('/fee/concession/pre-requisite', 'Finance\Fee\FeeConcessionController@preRequisite');
    Route::get('/fee/concession', 'Finance\Fee\FeeConcessionController@index');
    Route::get('/fee/concession/{id}', 'Finance\Fee\FeeConcessionController@show');
    Route::post('/fee/concession', 'Finance\Fee\FeeConcessionController@store');
    Route::post('/fee/concession/print', 'Finance\Fee\FeeConcessionController@print');
    Route::post('/fee/concession/pdf', 'Finance\Fee\FeeConcessionController@pdf');
    Route::patch('/fee/concession/{id}', 'Finance\Fee\FeeConcessionController@update');
    Route::delete('/fee/concession/{id}', 'Finance\Fee\FeeConcessionController@destroy');
    /*
             * Finance Routes End
    */

    /*
             * Student Routes Start
    */
    Route::get('/registration/pre-requisite', 'Student\RegistrationController@preRequisite');
    Route::get('/registration', 'Student\RegistrationController@index');
    Route::get('/registration/{id}', 'Student\RegistrationController@show');
    Route::post('/registration', 'Student\RegistrationController@store');
    Route::post('/registration/print', 'Student\RegistrationController@print');
    Route::post('/registration/pdf', 'Student\RegistrationController@pdf');
    Route::patch('/registration/{id}', 'Student\RegistrationController@update');
    Route::delete('/registration/{id}', 'Student\RegistrationController@destroy');

    Route::get('/registration/status/pre-requisite', 'Student\RegistrationController@statusPreRequisite');
    Route::post('/registration/{id}/update/status', 'Student\RegistrationController@updateStatus');

    Route::get('/registration/fee/pre-requisite', 'Student\RegistrationController@feePreRequisite');
    Route::post('/registration/{id}/fee/payment', 'Student\RegistrationController@feePayment');
    Route::post('/registration/{id}/fee/{transaction_id}/print', 'Student\RegistrationController@printReceipt');
    Route::post('/registration/{id}/transaction/{transaction_id}/cancel', 'Student\RegistrationController@cancelPayment');

    Route::get('/student/parent', 'Student\StudentParentController@index');
    Route::post('/student/parent', 'Student\StudentParentController@store');
    Route::post('/student/parent/print', 'Student\StudentParentController@print');
    Route::post('/student/parent/pdf', 'Student\StudentParentController@pdf');
    Route::get('/student/parent/search', 'Student\StudentParentController@search');
    Route::delete('/student/parent/{id}', 'Student\StudentParentController@destroy');

    Route::get('/student/pre-requisite', 'Student\StudentController@preRequisite');
    Route::post('/student/{id}/parent', 'Student\StudentController@updateParent');

    Route::get('/student/roll/number/pre-requisite', 'Student\StudentRecordController@rollNumberPreRequisite');
    Route::post('/student/roll/number', 'Student\StudentRecordController@storeRollNumber');
    Route::post('/student/fetch', 'Student\StudentRecordController@fetchBatchWiseStudent');
    Route::post('/student/fetch/login', 'Student\StudentRecordController@fetchBatchWiseStudentForLogin');

    Route::get('/student/attendance/pre-requisite', 'Student\AttendanceController@preRequisite');
    Route::get('/student/attendance/absentee', 'Student\AttendanceController@getAbsentee');
    Route::post('/student/attendance/absentee', 'Student\AttendanceController@sendSMSToAbsentee');
    Route::post('/student/attendance/absentee/print', 'Student\AttendanceController@printAbsentee');
    Route::post('/student/attendance/absentee/pdf', 'Student\AttendanceController@pdfAbsentee');
    Route::post('/student/attendance', 'Student\AttendanceController@store');
    Route::post('/student/attendance/fetch', 'Student\AttendanceController@fetch');
    Route::post('/student/attendance/delete', 'Student\AttendanceController@destroy');
    Route::post('/student/attendance/default', 'Student\AttendanceController@default');

    Route::post('/student/import/start', 'Student\StudentImportController@startImport');
    Route::post('/student/import/finish', 'Student\StudentImportController@finishImport');

    Route::get('/student/promotion/pre-requisite', 'Student\PromotionController@preRequisite');
    Route::get('/student/promotion', 'Student\PromotionController@index');
    Route::post('/student/promotion', 'Student\PromotionController@store');
    Route::post('/student/promotion/print', 'Student\PromotionController@print');
    Route::post('/student/promotion/pdf', 'Student\PromotionController@pdf');

    Route::get('/student/terminated', 'Student\TerminationController@index');
    Route::post('/student/terminated/print', 'Student\TerminationController@print');
    Route::post('/student/terminated/pdf', 'Student\TerminationController@pdf');
    Route::post('/student/{uuid}/terminate/{record_id}', 'Student\TerminationController@terminate');
    Route::get('/student/{uuid}/terminate/{record_id}/attachment', 'Student\TerminationController@terminateAttachment');

    Route::get('/student', 'Student\StudentController@index');
    Route::get('/student/{uuid}', 'Student\StudentController@show');
    Route::get('/student/{uuid}/sibling', 'Student\StudentController@sibling');
    Route::get('/student/search/name', 'Student\StudentController@searchByName');
    Route::get('/student/search/registration', 'Student\StudentController@searchForRegistration');
    Route::post('/student/print', 'Student\StudentController@print');
    Route::post('/student/pdf', 'Student\StudentController@pdf');
    Route::post('/student/action/group', 'Student\StudentController@groupAction');
    Route::patch('/student/{uuid}', 'Student\StudentController@update');
    Route::patch('/student/{uuid}/user/login', 'Student\StudentController@updateUserLogin');

    Route::get('/student/fee/pre-requisite', 'Student\StudentRecordController@feePreRequisite');
    Route::get('/student/record/pre-requisite', 'Student\StudentRecordController@recordPreRequisite');
    Route::patch('/student/{uuid}/record/{record_id}', 'Student\StudentRecordController@updateRecord');
    Route::get('/student/{uuid}/record/{record_id}', 'Student\StudentRecordController@index');
    Route::post('/student/{uuid}/fee/{record_id}', 'Student\StudentRecordController@store');
    Route::get('/student/{uuid}/fee/{record_id}', 'Student\StudentRecordController@fee');
    Route::get('/student/{uuid}/fee/{record_id}/detail', 'Student\StudentRecordController@feeDetail');
    Route::get('/student/{uuid}/fee/{record_id}/{fee_record_id}', 'Student\StudentRecordController@getPaymentDetail');
    Route::post('/student/{uuid}/payment/{record_id}', 'Student\StudentRecordController@makePayment');
    Route::post('/student/{uuid}/fee/{record_id}/{fee_record_id}/cancel', 'Student\StudentRecordController@cancelEmptyPayment');
    Route::post('/student/{uuid}/fee/{record_id}/{fee_record_id}/{transaction_id}/cancel', 'Student\StudentRecordController@cancelPayment');
    Route::post('/student/{uuid}/fee/{record_id}/{fee_record_id}/{transaction_id}/print', 'Student\StudentRecordController@printReceipt');
    Route::post('/student/{uuid}/fee/{record_id}/print', 'Student\StudentRecordController@print');
    Route::post('/student/{uuid}/fee/{record_id}/pdf', 'Student\StudentRecordController@pdf');
    Route::patch('/student/{uuid}/fee/{record_id}', 'Student\StudentRecordController@setFee');
    Route::patch('/student/{uuid}/fee/{record_id}/reset', 'Student\StudentRecordController@resetFee');

    Route::get('/student/{uuid}/record/{record_id}/attendance', 'Student\AttendanceController@studentMonthlyReport');

    Route::get('/student/{uuid}/document/pre-requisite', 'Student\StudentDocumentController@preRequisite');
    Route::get('/student/{uuid}/document', 'Student\StudentDocumentController@index');
    Route::get('/student/{uuid}/document/{id}', 'Student\StudentDocumentController@show');
    Route::post('/student/{uuid}/document', 'Student\StudentDocumentController@store');
    Route::patch('/student/{uuid}/document/{id}', 'Student\StudentDocumentController@update');
    Route::delete('/student/{uuid}/document/{id}', 'Student\StudentDocumentController@destroy');

    Route::get('/student/{uuid}/account', 'Student\StudentAccountController@index');
    Route::get('/student/{uuid}/account/{id}', 'Student\StudentAccountController@show');
    Route::post('/student/{uuid}/account', 'Student\StudentAccountController@store');
    Route::patch('/student/{uuid}/account/{id}', 'Student\StudentAccountController@update');
    Route::delete('/student/{uuid}/account/{id}', 'Student\StudentAccountController@destroy');

    Route::get('/student/{uuid}/qualification', 'Student\StudentQualificationController@index');
    Route::get('/student/{uuid}/qualification/{id}', 'Student\StudentQualificationController@show');
    Route::post('/student/{uuid}/qualification', 'Student\StudentQualificationController@store');
    Route::patch('/student/{uuid}/qualification/{id}', 'Student\StudentQualificationController@update');
    Route::delete('/student/{uuid}/qualification/{id}', 'Student\StudentQualificationController@destroy');

    Route::post('/student/{type}/photo/{uuid}', 'Student\StudentController@uploadPhoto');
    Route::delete('/student/{type}/photo/remove/{uuid}', 'Student\StudentController@removePhoto');
    /*
             * Student Routes End
    */

    /*
             * Transport Routes Start
    */
    Route::get('/transport/circle', 'Transport\TransportCircleController@index');
    Route::get('/transport/circle/{id}', 'Transport\TransportCircleController@show');
    Route::post('/transport/circle', 'Transport\TransportCircleController@store');
    Route::post('/transport/circle/print', 'Transport\TransportCircleController@print');
    Route::post('/transport/circle/pdf', 'Transport\TransportCircleController@pdf');
    Route::patch('/transport/circle/{id}', 'Transport\TransportCircleController@update');
    Route::delete('/transport/circle/{id}', 'Transport\TransportCircleController@destroy');
    
    Route::get('/transport/fee/pre-requisite', 'Transport\TransportFeeController@preRequisite');
    Route::get('/transport/fee', 'Transport\TransportFeeController@index');
    Route::get('/transport/fee/{id}', 'Transport\TransportFeeController@show');
    Route::post('/transport/fee', 'Transport\TransportFeeController@store');
    Route::post('/transport/fee/print', 'Transport\TransportFeeController@print');
    Route::post('/transport/fee/pdf', 'Transport\TransportFeeController@pdf');
    Route::patch('/transport/fee/{id}', 'Transport\TransportFeeController@update');
    Route::delete('/transport/fee/{id}', 'Transport\TransportFeeController@destroy');

    /*
             * Employee Routes Start
    */
    Route::get('/employee/pre-requisite', 'Employee\EmployeeController@preRequisite');
    Route::get('/employee/basic/pre-requisite', 'Employee\EmployeeController@basicPreRequisite');
    Route::get('/employee', 'Employee\EmployeeController@index');
    Route::get('/employee/{uuid}', 'Employee\EmployeeController@show');
    Route::get('/employee/search/name', 'Employee\EmployeeController@searchByName');
    Route::post('/employee', 'Employee\EmployeeController@store');
    Route::post('/employee/print', 'Employee\EmployeeController@print');
    Route::post('/employee/pdf', 'Employee\EmployeeController@pdf');
    Route::post('/employee/action/group', 'Employee\EmployeeController@groupAction');
    Route::patch('/employee/{uuid}', 'Employee\EmployeeController@update');
    Route::patch('/employee/{uuid}/user/login', 'Employee\EmployeeController@updateUserLogin');
    
    Route::post('/employee/import/start', 'Employee\EmployeeImportController@startImport');
    Route::post('/employee/import/finish', 'Employee\EmployeeImportController@finishImport');

    Route::post('/employee/{uuid}/photo', 'Employee\EmployeeController@uploadPhoto');
    Route::delete('/employee/{uuid}/photo/remove', 'Employee\EmployeeController@removePhoto');

    Route::get('/employee/{uuid}/designation/pre-requisite', 'Employee\EmployeeDesignationController@preRequisite');
    Route::post('/employee/{uuid}/designation', 'Employee\EmployeeDesignationController@store');
    Route::get('/employee/{uuid}/designation/{id}', 'Employee\EmployeeDesignationController@show');
    Route::patch('/employee/{uuid}/designation/{id}', 'Employee\EmployeeDesignationController@update');
    Route::delete('/employee/{uuid}/designation/{id}', 'Employee\EmployeeDesignationController@destroy');

    Route::get('/employee/{uuid}/term/pre-requisite', 'Employee\EmployeeTermController@preRequisite');
    Route::post('/employee/{uuid}/term', 'Employee\EmployeeTermController@store');
    Route::get('/employee/{uuid}/term/{id}', 'Employee\EmployeeTermController@show');
    Route::patch('/employee/{uuid}/term/{id}', 'Employee\EmployeeTermController@update');
    Route::delete('/employee/{uuid}/term/{id}', 'Employee\EmployeeTermController@destroy');

    Route::get('/employee/{uuid}/document/pre-requisite', 'Employee\EmployeeDocumentController@preRequisite');
    Route::get('/employee/{uuid}/document', 'Employee\EmployeeDocumentController@index');
    Route::get('/employee/{uuid}/document/{id}', 'Employee\EmployeeDocumentController@show');
    Route::post('/employee/{uuid}/document', 'Employee\EmployeeDocumentController@store');
    Route::patch('/employee/{uuid}/document/{id}', 'Employee\EmployeeDocumentController@update');
    Route::delete('/employee/{uuid}/document/{id}', 'Employee\EmployeeDocumentController@destroy');

    Route::get('/employee/{uuid}/account', 'Employee\EmployeeAccountController@index');
    Route::get('/employee/{uuid}/account/{id}', 'Employee\EmployeeAccountController@show');
    Route::post('/employee/{uuid}/account', 'Employee\EmployeeAccountController@store');
    Route::patch('/employee/{uuid}/account/{id}', 'Employee\EmployeeAccountController@update');
    Route::delete('/employee/{uuid}/account/{id}', 'Employee\EmployeeAccountController@destroy');

    Route::get('/employee/{uuid}/qualification', 'Employee\EmployeeQualificationController@index');
    Route::get('/employee/{uuid}/qualification/{id}', 'Employee\EmployeeQualificationController@show');
    Route::post('/employee/{uuid}/qualification', 'Employee\EmployeeQualificationController@store');
    Route::patch('/employee/{uuid}/qualification/{id}', 'Employee\EmployeeQualificationController@update');
    Route::delete('/employee/{uuid}/qualification/{id}', 'Employee\EmployeeQualificationController@destroy');

    /*
             * Calendar Routes Start
    */
    Route::get('/holiday', 'Calendar\HolidayController@index');
    Route::get('/holiday/{id}', 'Calendar\HolidayController@show');
    Route::post('/holiday', 'Calendar\HolidayController@store');
    Route::post('/holiday/print', 'Calendar\HolidayController@print');
    Route::post('/holiday/pdf', 'Calendar\HolidayController@pdf');
    Route::patch('/holiday/{id}', 'Calendar\HolidayController@update');
    Route::delete('/holiday/{id}', 'Calendar\HolidayController@destroy');

    Route::get('/event/pre-requisite', 'Calendar\EventController@preRequisite');
    Route::get('/event', 'Calendar\EventController@index');
    Route::get('/event/upcoming', 'Calendar\EventController@upcoming');
    Route::get('/event/{uuid}', 'Calendar\EventController@show');
    Route::post('/event', 'Calendar\EventController@store');
    Route::post('/event/print', 'Calendar\EventController@print');
    Route::post('/event/pdf', 'Calendar\EventController@pdf');
    Route::patch('/event/{uuid}', 'Calendar\EventController@update');
    Route::delete('/event/{uuid}', 'Calendar\EventController@destroy');

    Route::get('/birthday', 'Calendar\CelebrationController@birthday');
    Route::post('/birthday/print', 'Calendar\CelebrationController@printBirthday');
    Route::post('/birthday/pdf', 'Calendar\CelebrationController@pdfBirthday');
    Route::get('/anniversary', 'Calendar\CelebrationController@anniversary');
    Route::post('/anniversary/print', 'Calendar\CelebrationController@printAnniversary');
    Route::post('/anniversary/pdf', 'Calendar\CelebrationController@pdfAnniversary');
    Route::get('/work/anniversary', 'Calendar\CelebrationController@workAnniversary');
    Route::post('/work/anniversary/print', 'Calendar\CelebrationController@printWorkAnniversary');
    Route::post('/work/anniversary/pdf', 'Calendar\CelebrationController@pdfWorkAnniversary');
    /*
             * Calendar Routes End
    */

    /*
             * Post Routes Start
    */
    Route::get('/article/pre-requisite', 'Post\ArticleController@preRequisite');
    Route::get('/article', 'Post\ArticleController@index');
    Route::get('/article/{uuid}', 'Post\ArticleController@show');
    Route::post('/article', 'Post\ArticleController@store');
    Route::post('/article/print', 'Post\ArticleController@print');
    Route::post('/article/pdf', 'Post\ArticleController@pdf');
    Route::patch('/article/{uuid}', 'Post\ArticleController@update');
    Route::delete('/article/{uuid}', 'Post\ArticleController@destroy');
    /*
             * Post Routes End
    */

    /*
             * Reception Routes Start
    */
    Route::get('/enquiry/pre-requisite', 'Reception\EnquiryController@preRequisite');
    Route::get('/enquiry', 'Reception\EnquiryController@index');
    Route::get('/enquiry/{uuid}', 'Reception\EnquiryController@show');
    Route::post('/enquiry', 'Reception\EnquiryController@store');
    Route::post('/enquiry/print', 'Reception\EnquiryController@print');
    Route::post('/enquiry/pdf', 'Reception\EnquiryController@pdf');
    Route::post('/enquiry/{uuid}/follow/up', 'Reception\EnquiryController@followUp');
    Route::patch('/enquiry/{uuid}', 'Reception\EnquiryController@update');
    Route::delete('/enquiry/{uuid}', 'Reception\EnquiryController@destroy');
    Route::delete('/enquiry/{uuid}/follow/up/{id}', 'Reception\EnquiryController@destroyFollowUp');

    Route::get('/complaint/pre-requisite', 'Reception\ComplaintController@preRequisite');
    Route::get('/complaint', 'Reception\ComplaintController@index');
    Route::get('/complaint/{uuid}', 'Reception\ComplaintController@show');
    Route::post('/complaint', 'Reception\ComplaintController@store');
    Route::post('/complaint/print', 'Reception\ComplaintController@print');
    Route::post('/complaint/pdf', 'Reception\ComplaintController@pdf');
    Route::patch('/complaint/{uuid}', 'Reception\ComplaintController@update');
    Route::delete('/complaint/{uuid}', 'Reception\ComplaintController@destroy');

    Route::get('/visitor/log/pre-requisite', 'Reception\VisitorLogController@preRequisite');
    Route::get('/visitor/log', 'Reception\VisitorLogController@index');
    Route::get('/visitor/log/{uuid}', 'Reception\VisitorLogController@show');
    Route::post('/visitor/log', 'Reception\VisitorLogController@store');
    Route::post('/visitor/log/print', 'Reception\VisitorLogController@print');
    Route::post('/visitor/log/pdf', 'Reception\VisitorLogController@pdf');
    Route::patch('/visitor/log/{uuid}', 'Reception\VisitorLogController@update');
    Route::delete('/visitor/log/{uuid}', 'Reception\VisitorLogController@destroy');

    Route::get('/call/log/pre-requisite', 'Reception\CallLogController@preRequisite');
    Route::get('/call/log', 'Reception\CallLogController@index');
    Route::get('/call/log/{uuid}', 'Reception\CallLogController@show');
    Route::post('/call/log', 'Reception\CallLogController@store');
    Route::post('/call/log/print', 'Reception\CallLogController@print');
    Route::post('/call/log/pdf', 'Reception\CallLogController@pdf');
    Route::patch('/call/log/{uuid}', 'Reception\CallLogController@update');
    Route::delete('/call/log/{uuid}', 'Reception\CallLogController@destroy');

    Route::get('/postal/record/pre-requisite', 'Reception\PostalRecordController@preRequisite');
    Route::get('/postal/record', 'Reception\PostalRecordController@index');
    Route::get('/postal/record/{uuid}', 'Reception\PostalRecordController@show');
    Route::post('/postal/record', 'Reception\PostalRecordController@store');
    Route::post('/postal/record/print', 'Reception\PostalRecordController@print');
    Route::post('/postal/record/pdf', 'Reception\PostalRecordController@pdf');
    Route::patch('/postal/record/{uuid}', 'Reception\PostalRecordController@update');
    Route::delete('/postal/record/{uuid}', 'Reception\PostalRecordController@destroy');

    Route::get('/gate/pass/pre-requisite', 'Reception\GatePassController@preRequisite');
    Route::get('/gate/pass', 'Reception\GatePassController@index');
    Route::get('/gate/pass/{uuid}', 'Reception\GatePassController@show');
    Route::post('/gate/pass', 'Reception\GatePassController@store');
    Route::post('/gate/pass/print', 'Reception\GatePassController@print');
    Route::post('/gate/pass/pdf', 'Reception\GatePassController@pdf');
    Route::patch('/gate/pass/{uuid}', 'Reception\GatePassController@update');
    Route::delete('/gate/pass/{uuid}', 'Reception\GatePassController@destroy');
    /*
             * Reception Routes End
    */

    Route::get('/fee/report/summary', 'Finance\Fee\ReportController@feeSummary');
    Route::post('/fee/report/summary/print', 'Finance\Fee\ReportController@printFeeSummary');
    Route::post('/fee/report/summary/pdf', 'Finance\Fee\ReportController@pdfFeeSummary');
    Route::post('/fee/report/summary/sms', 'Finance\Fee\ReportController@smsSummary');
    Route::get('/fee/report/concession', 'Finance\Fee\ReportController@feeConcession');
    Route::post('/fee/report/concession/print', 'Finance\Fee\ReportController@printFeeConcession');
    Route::post('/fee/report/concession/pdf', 'Finance\Fee\ReportController@pdfFeeConcession');
    Route::get('/fee/report/due', 'Finance\Fee\ReportController@feeDue');
    Route::post('/fee/report/due/print', 'Finance\Fee\ReportController@printFeeDue');
    Route::post('/fee/report/due/pdf', 'Finance\Fee\ReportController@pdfFeeDue');
    Route::post('/fee/report/due/sms', 'Finance\Fee\ReportController@smsDue');
    Route::get('/fee/report/payment', 'Finance\Fee\ReportController@feePayment');
    Route::post('/fee/report/payment/print', 'Finance\Fee\ReportController@printFeePayment');
    Route::post('/fee/report/payment/pdf', 'Finance\Fee\ReportController@pdfFeePayment');
    Route::post('/fee/report/payment/sms', 'Finance\Fee\ReportController@smsPayment');

    Route::get('/transaction/report/pre-requisite', 'Finance\Transaction\ReportController@preRequisite');
    Route::get('/transaction/report/summary', 'Finance\Transaction\ReportController@summary');
    Route::post('/transaction/report/summary/print', 'Finance\Transaction\ReportController@printSummary');
    Route::post('/transaction/report/summary/pdf', 'Finance\Transaction\ReportController@pdfSummary');
    Route::get('/transaction/report/day-book', 'Finance\Transaction\ReportController@dayBook');
    Route::post('/transaction/report/day-book/print', 'Finance\Transaction\ReportController@printDayBook');
    Route::post('/transaction/report/day-book/pdf', 'Finance\Transaction\ReportController@pdfDayBook');

    /*
             * Communication Routes Start
    */
    Route::get('/communication/pre-requisite', 'Communication\CommunicationController@preRequisite');
    Route::get('/communication', 'Communication\CommunicationController@index');
    Route::get('/communication/{uuid}', 'Communication\CommunicationController@show');
    Route::post('/communication/print', 'Communication\CommunicationController@print');
    Route::post('/communication/pdf', 'Communication\CommunicationController@pdf');
    Route::delete('/communication/{uuid}', 'Communication\CommunicationController@destroy');
    Route::post('/sms', 'Communication\SMSController@store');
    Route::post('/email', 'Communication\EmailController@store');
    Route::get('/notification', 'Communication\CommunicationController@getNotification');
    /*
    * Communication Routes End
    */
});

Route::any('/{var?}', function () {
    return response()->json(['message' => 'API Endpoint Not Found!'], 404);
});
