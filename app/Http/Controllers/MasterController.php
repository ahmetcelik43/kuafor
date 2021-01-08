<?php

namespace App\Http\Controllers;
//use Laravel\Socialite\Facades\Socialite;
//use Illuminate\Support\Facades\Redirect;
use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Auth;
//use Symfony\Component\HttpFoundation\Cookie;
use App\User;
//use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;

class MasterController extends Controller
{
    public function home()
    {
       // clearstatcache();
       
       //return \File::get(public_path() . '/newTemplate/master.html');
       return view("master");



    }
    public function getProfileUrl(Request $request)
    {
        $user = User::where("ad",$request->input("ad"))->take(1)->get();
        return response()->json(["link"=> $user[0]->profilUrl ],201);

    }
    public function profilPaylas(Request $request)
    {
    try
    {

        $user = User::where("email",$request->input("email"))->take(1)->get();
        if(!empty($user) && count($user) > 0)
        {
            $hashedEmail =uniqid();
            //$user->profilUrl = $hashedEmail;
            User::where("email",$request->input("email"))->update(["profilUrl"=>$hashedEmail]);
            return response()->json(["message"=>"ok","link"=>$hashedEmail],201);

        }  
        return response()->json(["message"=>"Kullanıcı Bulunamadı !"],201);
    }
    catch(\Illuminate\Database\QueryException $exception)
    {
        return response()->json(["message"=>"Hata"],500);

    }
    }
 
   public function profilGoster($url , $ad)
    {
        try {
            $user = User::where([["ad",'=',$ad],["profilUrl",'=',$url]])->take(1)->get();
            $arry=[
                "email"=> $user[0]->email,
                "rol"=>$user[0]->rol->rolAdi,
                "ad"=>$user[0]->ad,
                //"telefon"=>$user->telefon,
                "resimUrl"=>$user[0]->profilResmiUrl
                
            ];
            
            if(!empty($user) && count($user) > 0)
            {
             return view("profil.profil")->with("arry",$arry);
            }
            return response()->json(["message"=>"Kullanıcı Bulunamadı !"],201);

        } catch (\Throwable $th) {
            echo(12);

            return response()->json(["message"=>"Kullanıcı Bulunamadı !"],201);

        }
         




    }
    //google buraya yönlediricek.
    public function Callback2(Request $request)
    {
        //$referer =session_get_cookie_params();
        try{
        $user = User::where($request->all())->get()->map(function ($item) {
          return [
              "email"=>$item->email,
              "ad"=>$item->ad,
              "profileImage"=>$item->profilResmiUrl,
              "rol"=>$item->rol->rolAdi,
          ];
          });
       
        if(!empty($user) && count($user) > 0)
       {
        return response()->json(["message"=>"userexits","user"=>$user], 201);

       }

       return response()->json(["message"=>"usernotexits"], 200);
      }
       catch (\Illuminate\Database\QueryException $exception)
      {
         $errorInfo = $exception->errorInfo;
         return response($errorInfo,500);     
     
     }
    }

     
   
    public function Callback()
    {

        return view("master");



    }
    

    public function lang($locale,Request $req)
    {
          App::setLocale($locale);
          session()->put('locale', $locale);
          //die(strstr($req->headers->get('referer') , '?sidenav=1'));
          //die($_SERVER['HTTP_REFERER']);
          //die($req->headers->get('referer'));
          //echo (strlen($req->headers->get('referer')));
          //die(); 
          if(strpos($req->headers->get('referer') , '?sidenav=1') !== false)
          {
              //$number=strlen($req->headers->get('referer'));
              //echo (1);dle();
            $url = $req->headers->get('referer');
           
           return redirect($url);
          }
         return redirect($req->headers->get('referer').'?sidenav=1');
          //redirect(\Request::getRequestUri().'?sidenav=1');
          /*if(!strpos(\Request::getRequestUri() , '?sidenav=1') !== false)
          {
            $url = substr($req->headers->get('referer'),0, -10);
            die($url);
           redirect($url);
          }*/
          //redirect($url);

         // die($request->url());
          // redirect($request->url().'?sidenav=1');
          /*if(!strpos($request->url() , '?sidenav=1') !== false)
          {
          $url = \Request::getRequestUri();
          die($url);
           redirect($url);
          }
        */
         //return redirect()->back();

    }
}
?>