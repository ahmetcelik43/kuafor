<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

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
Route::get('', 'HomeController@landingPage')->name("anasayfa");
Route::get('anasayfa/{loginModal?}', 'HomeController@landingPage');

Route::get('ilanlar', 'HomeController@landingPage');


Route::group([
     'middleware' => 'admin',
     'prefix'=>'admin'
],function(){
     Route::get('', 'AdminController@home')->name("adminHome");
});
Route::group([
     'prefix'=>'login'
],function(){
     Route::post('/', 'LoginController@login')->name("login");
});

Route::get('lang/{locale}', 'HomeController@lang');
Route::get('clear', function(){
     Artisan::call('view:clear');
     Artisan::call('cache:clear');
     Artisan::call('config:clear');
     echo   "Cache cleared";
});

//Route::get('', 'HomeController@landingPage');

