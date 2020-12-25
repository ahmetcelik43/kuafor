<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class UserController extends Controller
{
    //giriş yap
    //korumasız yol
    public function authenticate(Request $request)
    {
        $credentials = $request->only('email', 'password');
        //$array=['email'=>$request->get('email'),'password'=>bcrypt($request->get('password'))];
        //\dd(bcrypt($request->get('password')));

        try {
            //\dd(JWTAuth::attempt($credentials));
         
           // $user = DB::table('users')->where('email', $request->get('email'))->first();
            $user = User::where('email', $request->get('email'))->first();
            
            //\dd($request->get('password'));
            if(!empty($user))
            {
                //$array=['email'=>$request->get('email'),'password'=>bcrypt($request->get('password'))];
            //\dd( $user->password);
                if (Hash::check($request->get('password'),$user->password )) {
                    $token = JWTAuth::fromUser($user);
                    $email=$request->get('email');
                    $name=$user->name;
                    return response()->json(compact('token','email','name'));
                }
            }
            return response()->json(['error' => 'invalid_credentials'], 200);

            
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        
    }
    //kayıt ol
    //korumasız yol
    public function register(Request $request)
    {
            $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if($validator->fails()){
                return response()->json($validator->errors()->toJson(), 400);
        }

        $user = User::create([
            'name' => $request->get('name'),
            'email' => $request->get('email'),
            'password' => Hash::make($request->get('password')),
        ]);
        //\dd($user);
        $token = JWTAuth::fromUser($user);

        return response()->json(compact('user','token'),201);
    }
   //korumalı yol
    public function getAuthenticatedUser()
        {
            //makale ekle ,makale guncelle ,makale sil bu kodu ekle 
                try {

                        if (! $user = JWTAuth::parseToken()->authenticate()) {
                                return response()->json(['user_not_found'], 404);
                        }

                } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {

                        return response()->json(['token_expired'], $e->getStatusCode());

                } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {

                        return response()->json(['token_invalid'], $e->getStatusCode());

                } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {

                        return response()->json(['token_absent'], $e->getStatusCode());

                }

                return response()->json(compact('user'));
        }

        public function logout()
        {
            if(JWTAuth::getToken())
            {
                JWTAuth::invalidate(JWTAuth::getToken());

            }
            return response()->json(compact("logout succesfully"),200);

        }
}
