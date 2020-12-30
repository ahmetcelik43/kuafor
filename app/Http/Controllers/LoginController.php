<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
// strcmp($user[0]->email,$request->input("email")) === 0 
    public function login(Request $request)
    {

       $user = User::where('email',$request->input("email"))->take(1)->get();
      
       if(count($user) > 0 && Auth::attempt(array('email' => $user[0]->email, 'password' => $request->input('sifre')), $request->input('isRemember')))
       {
        
         return response(array("message"=>"Giriş Başarılı !" , "rolID"=>Auth::user()->rolID),201);


       }
         return response("Giriş Başarısız !",403);
      

    }

}
/*
        if (Hash::check($request->input("sifre"), $user[0]->sifre))
       
        {
            return response("Giriş Başarılı !",201);

        }
        */