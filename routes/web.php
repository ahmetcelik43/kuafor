<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\File;
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

Route::get('/profilgoster/{url?}/{ad?}','MasterController@profilGoster');

Route::get('/{any_path?}','MasterController@home')->where('any_path','(.*)');
Route::post('/profilUrlUret','MasterController@profilPaylas');
Route::post('/getProfileUrl','MasterController@getProfileUrl');

/*Route::get('/{loginModal?}/{prevUrl?}/{referrer?}',function()
{
    
     return \File::get(public_path() . '/newTemplate/master.html');

})->name("anasayfa");*/
//Route::get('{logiModal?}/{refererUrl?}', 'MasterController@home');
//Route::get('anasayfa/{loginModal?}', 'MasterController@home');

//Route::get('ilanlar', 'MasterController@home');
//Route::get('logout', 'LoginController@logout');
//Route::get('deneme', 'MasterController@deneme');

//Route::get('redirectRefererUrl', 'LoginController@logout');

//Route::get('googleCallback/{username}/{email}', 'MasterController@Callback')->name("googleCallback");

/*
Route::group([
     'middleware' => 'admin',
     'prefix'=>'admin'
],function(){
     Route::get('', 'AdminController@home')->name("adminHome");
});
*/

Route::group([
     'prefix'=>'login'
],function(){
     Route::post('', 'LoginController@login')->name("login");
     Route::post('register', 'LoginController@register')->name("register");

     Route::post('/auth/googleredirect', function () {
          return Socialite::driver('google')->redirect();
      });
      Route::post('/google','MasterController@Callback2');
      //Route::get('/anasayfa/0/1', function () {
         // $user = Socialite::driver('google')->user();
          //Route::view('/welcome', 'welcome');
          //return route('googleCallback/'.$user->name.'/'.$user->email);
          //return Redirect::route('googleCallback', ['username' => $user->name, 'email' => $user->email]);
     //return redirect()->action('${App\Http\Controllers\MasterController@googleCallback}', ['parameterKey' => 'value']);
         //eturn redirect('/googleCallback/'.$user->name.'/'.$user->email);
     // });
      
});

Route::get('lang/{locale}', 'MasterController@lang');

Route::get('/clear', function(){
     Artisan::call('view:clear');
     Artisan::call('cache:clear');
     Artisan::call('config:clear');
     Artisan::call('view:cache');
     Artisan::call('route:clear');

     echo   "Cache cleared";
});


//Route::get('googleCallback/{username?}?email={email?}', 'MasterController@home');
//Route::get('googleCallback3', 'MasterController@Callback3')->name("googleCallback");

//Route::get('', 'HomeController@landingPage');

