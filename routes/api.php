<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

    //erişime açık
    /*
    Route::post('register', 'UserController@register');
    Route::post('login', 'UserController@authenticate');
    Route::get('jwtcheck', 'DataController@jwtcheck');
    Route::get('getArticles', 'DataController@getArticles');
    Route::get('articledetails', 'DataController@articledetails');

    //auth olmadan erişim olmayacak 
    Route::group(['middleware' => ['jwt.verify','cors']], function() {
        Route::get('user', 'UserController@getAuthenticatedUser');
        
        Route::get('logout', 'UserController@logout');

        Route::post('upload', 'DataController@upload');
        Route::post('articleadd', 'DataController@articleadd');
        Route::post('saveCategory', 'DataController@saveCategory');
        
        Route::get('getAllCategorys', 'DataController@getAllCategorys');

    });
*/

