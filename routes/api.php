<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//User Auth

Route::post('userlogin', 'Api\User\Auth\LoginController@login');

Route::post('userregister', 'Api\User\Auth\RegisterController@register');



//Admin Auth

Route::post('adminlogin', 'Api\Admin\Auth\LoginController@login');

Route::post('adminregister', 'Api\Admin\Auth\RegisterController@register');

Route::get('adminprofile','Api\Admin\Auth\LoginController@profile');

//Student Auth

Route::post('studentlogin', 'Api\Student\Auth\LoginController@login');

Route::post('studentregister', 'Api\Student\Auth\RegisterController@register');
Route::get('studentprofile','Api\Student\Auth\LoginController@profile');
Route::get('user/verify/{verification_code}','Api\Student\Auth\RegisterController@verifyUser');

//Vendor Auth

Route::post('vendorlogin', 'Api\Vendor\Auth\LoginController@login');

Route::post('vendorregister', 'Api\Vendor\Auth\RegisterController@register');

Route::get('vendorprofile','Api\Vendor\Auth\LoginController@profile');

//Offer
Route::get('offers', 'Api\Offer\OfferController@index');
Route::get('vendor/offers/{offer}', 'Api\Offer\OfferController@show');
Route::post('offers', 'Api\Offer\OfferController@store');
Route::put('offers/{offer}', 'Api\Offer\OfferController@update');
Route::delete('offers/{id}', 'Api\Offer\OfferController@delete');

//Category
Route::get('categories', 'Api\Category\CategoryController@index');
Route::get('categories/{id}', 'Api\Category\CategoryrController@show');
Route::post('categories', 'Api\Category\CategoryController@store');
Route::put('categories/{id}', 'Api\Category\CategoryController@update');
Route::delete('categories/{id}', 'Api\Category\CategoryController@delete');

//Verification
Route::get('/email/resend', 'Api\Student\Auth\LoginController@resend')->name('verification.resend');
Route::get('/email/verify/{id}/{hash}', 'Api\Student\Auth\LoginController@verify')->name('verification.verify');

//PortalStudent
Route::post('pregister','Api\PortalStudent\Auth\ValidationController@CreateUser');
Route::get('studentdetails/{portalid}','Api\PortalStudent\Auth\ValidationController@studentdetails');
Route::get('det','Api\PortalStudent\Auth\ValidationController@det');




//Here is the protected User Routes Group,  

Route::group(['middleware' => 'jwt.auth', 'prefix' => 'user'], function(){

    Route::get('logout', 'Api\User\UserController@logout');

    Route::get('dashboard', 'Api\User\UserController@dashboard');

});





//Here is the protected Admin Routes Group

Route::group(['middleware' => 'auth:api'], function(){

    //Route::get('vendorprofile', 'Api\Vendor\Auth\LoginController@vendorprofile');

});

Route::group(['prefix' => 'recommendations'], function(){

    Route::get('getByUser/{id}', 'Api\Recommendations\RecommendationController@index');
    Route::get('getByOffer/{id}', 'Api\Recommendations\RecommendationController@offer');

});