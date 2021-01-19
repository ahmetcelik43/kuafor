<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
//use Illuminate\Support\Facades\App;
//use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
   
// strcmp($user[0]->email,$request->input("email")) === 0 
    public function login(Request $request)
    {

       $user = User::where("email",$request->input('email'))->get()->map(function ($item) {
        return array(
            "id"=>$item->id,
            "email"=>$item->email,
            "ad"=>$item->ad,
            "profileImage"=>$item->profilResmiUrl,
            "rol"=>$item->rol->rolAdi,
            "password"=>$item->password
        );
        });
        //return response()->json($user[0]);
       if(count($user) > 0  && Hash::check($request->input('password'),$user[0]["password"]))
       {
        //$userDetails['rol']=$user->rol->rolAdi;
        //$userDetails = Auth::user();        
         $user_ = $user[0];
         unset($user_["password"]);

         //$user = array_map(function($i) {  return ["email"=>$i->email , ""]} , $user);
         return response()->json(["message"=>"OK" , "user"=>$user], 201);


       }
       return response()->json(["message" => "Failed"], 403);
      

    }
    public function register(Request $request)
    {

        try {
           
            $userDetails = $request->only("email","ad","rolID");
            $userDetails["password"]=Hash::make($request->input("password"));
            $userID = User::create($userDetails)->id;
           
            $user = User::where("id",$userID)->get()->map(function ($item) {
                return [
                    "id"=>$item->id,
                    "email"=>$item->email,
                    "ad"=>$item->ad,
                    "profileImage"=>$item->profilResmiUrl,
                    "rol"=>$item->rol->rolAdi,
                ];
                });
           
            return response(array("status"=>"OK","user"=>$user),201);     
           
           } catch (\Illuminate\Database\QueryException $exception)
            {
               // You can check get the details of the error using `errorInfo`:
               $errorInfo = $exception->errorInfo;
               return response(array("message"=>$errorInfo,"status"=>"Failed"),403);     
           
           }
     
    }
    /*
    public function logout()
    {
         Auth::logout();
         return response("Ok !",201);     
    }
    */
    /*
    public function register(Request $request)
    {

try {
 // return response(array("message"=>$request->input('name')),201);     

    User::create(array(
        'ad' => $request->input('name'),
        'email' => $request->input('email'),
        'password' => Hash::make($request->input('sifre')),
        'rolID' => $request->input('rol')      
    ));
    return response(array("message"=>"OK"),201);     

} catch (\Illuminate\Database\QueryException $exception) {
    // You can check get the details of the error using `errorInfo`:
    $errorInfo = $exception->errorInfo;
    return response(array("message"=>$errorInfo),500);     

}   
 }
 */
}
