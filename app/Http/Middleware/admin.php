<?php

namespace App\Http\Middleware;

use Auth;
use Closure;

class admin
{
   
    public function handle($request, Closure $next)
    {
        if (!Auth::check()) {
            return redirect()->route('anasayfa/1');
        }
        //ADMİNNE YÖNLEN.
        if (Auth::user()->rol->id == 1) {
            return redirect()->route('adminHome');
        }
        //USERDIR.
        if (Auth::user()->rol->id == 2) {
            return redirect()->route('academy');
        }
         //KUAFORDÜR.
        if (Auth::user()->rol->id == 3) {
            return redirect()->route('scout');
        }

       
    }

}