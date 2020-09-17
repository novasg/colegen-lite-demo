<?php
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */

Route::get('/test', 'HomeController@test');
Route::get('/custom', function () {
    return;
});
Route::get('/cache', 'Configuration\ConfigurationController@clearCache');

Route::group(['middleware' => ['auth:api']], function () {
    Route::get('/student/{uuid}/document/{id}/attachment/{attachment_uuid}/download', 'Student\StudentDocumentController@download');
    Route::get('/student/{uuid}/qualification/{id}/attachment/{attachment_uuid}/download', 'Student\StudentQualificationController@download');
    Route::get('/student/{uuid}/terminate/{id}/attachment/{attachment_uuid}/download', 'Student\TerminationController@download');

    Route::get('/employee/{uuid}/document/{id}/attachment/{attachment_uuid}/download', 'Employee\EmployeeDocumentController@download');
    Route::get('/employee/{uuid}/qualification/{id}/attachment/{attachment_uuid}/download', 'Employee\EmployeeQualificationController@download');
    Route::get('/employee/{uuid}/designation/{id}/attachment/{attachment_uuid}/download', 'Employee\EmployeeDesignationController@download');
    Route::get('/employee/{uuid}/term/{id}/attachment/{attachment_uuid}/download', 'Employee\EmployeeTermController@download');

    Route::get('/reception/gate/pass/{uuid}/print', 'Reception\GatePassController@printDetail');
    Route::get('/reception/visitor/pass/{uuid}/print', 'Reception\VisitorLogController@printDetail');
    
    Route::get('/reception/postal/record/{uuid}/attachment/{attachment_uuid}/download', 'Reception\PostalRecordController@download');
    Route::get('/reception/complaint/{uuid}/attachment/{attachment_uuid}/download', 'Reception\ComplaintController@download');

    Route::get('/download/report/{uuid}', 'HomeController@download');
});

Route::get('/calendar/event/{uuid}/attachment/{attachment_uuid}/download', 'Calendar\EventController@download');
Route::get('/post/article/{uuid}/attachment/{attachment_uuid}/download', 'Post\ArticleController@download');
Route::get('/paypal/status', 'Student\StudentFeePaymentController@paypalStatus');

// Used to get translation in json format for current locale

Route::get('/js/lang', function () {
    if (App::environment('local')) {
        Cache::forget('lang.js');
    }

    if (\Cache::has('locale')) {
        config(['app.locale' => \Cache::get('locale')]);
    }

    $strings = Cache::rememberForever('lang.js', function () {
        $lang = config('app.locale');
        $files = glob(resource_path('lang/' . $lang . '/*.php'));
        $strings = [];
        foreach ($files as $file) {
            $name = basename($file, '.php');
            $strings[$name] = require $file;
        }
        return $strings;
    });
    header('Content-Type: text/javascript');
    echo('window.i18n = ' . json_encode($strings) . ';');
    exit();
})->name('assets.lang');

Route::get('/{vue?}', function () {
    return view('home');
})->where('vue', '[\/\w\.-]*')->name('home');
