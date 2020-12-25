<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
class HomeController extends Controller
{

    public function landingPage()
    {

        return view("a");



    }


    public function lang($locale)
    {
          App::setLocale($locale);
          session()->put('locale', $locale);
          return redirect()->back();

    }
}
