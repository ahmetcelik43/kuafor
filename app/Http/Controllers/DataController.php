<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Validator;
//use Illuminate\Support\Facades\Storage;
use Image;
use Illuminate\Support\Facades\DB;

    use JWTAuth;
    use Exception;
    use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;

class DataController extends Controller
{
    public function open() 
    {
        $data = "This data is open and can be accessed without the client being authenticated";
        return response()->json(compact('data'),200);

    }

    public function closed() 
    {
        $data = "Only authorized users can see this";
        return response()->json(compact('data'),200);
    }
    
    public function upload(Request $request) 
    {  /*$validator = Validator::make($request->all(), [
        'file' => 'required',
    ]);
    if($validator->fails()){
        return response()->json($validator->errors()->toJson(), 400);
}
*/
      $request->validate([
   'file'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048'
       ]);
       $image = $request->file('file');
       

  

        $imageName = time().'.'.$image->getClientOriginalExtension();
        $path = public_path($imageName);

        //$img = Image::make($image->getRealPath());
        $img =Image::make($image)->orientate()->fit(500)->save($path);
/*
        $img->resize(120, 120, function ($constraint) {
            $constraint->aspectRatio();                 
        });
*/
        //$img->stream(); // <-- Key point

        //dd();
        //Storage::disk('local')->put('articleImages'.'/'.$imageName, $img, 'public');
        //$img->move(public_path('imagesInArticle'), $imageName);


        //request()->image->move(public_path('images'), $imageName);

        $path=$imageName;
        return response()->json(compact('path'),200);
    }
    public function articleadd(Request $request) 
    {
        $request->validate([
            'file'=>'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'konu'=>'required',
            'baslik'=>'required',
            'content'=>'required',

                ]);
                $image = $request->file('file');
       

  

                $imageName = time().'.'.$image->getClientOriginalExtension();
                $path = public_path($imageName);
        
                //$img = Image::make($image->getRealPath());
                $img =Image::make($image)->orientate()->fit(500)->save($path);
                date_default_timezone_set('Europe/Istanbul');
             DB::table('articles')->insert(
            ['baslik' => $request->get('baslik'),
             'konu' => $request->get('konu'),
             'content' => $request->get('content'),
             'imagename'=>$imageName,
             'createdAt'=>date("Y/m/d"),
             'categoryId'=>$request->get('categoryId')
            ]
        );     
        $data="success";  
         return response()->json(compact('data'),200);
    }
     public function getAllCategorys() 
    {
        $categorys = DB::table('categorys')->select('name', 'id')->get();
        //\dd($categorys);
         $array=array();
         $i=0;
        foreach ($categorys as $key => $node)
{
    $array[$i]['name']=$node->name;
    $array[$i]['id']=$node->id;
    $i++;
}
    //\dd($array);
        return response()->json(compact('array'),200);


    }
    /*
    {
    "categoryArray": {
        "name": "Laravel",
        "id": 3
    }
}
    */
    public function saveCategory(Request $request) 
    {
        date_default_timezone_set('Europe/Istanbul');
      $id = DB::table('categorys')->insertGetId(
       ['name' => $request->get('name'),     
        'createdAt'=>date("Y/m/d"),
       ]
        );
        $categorys = DB::table('categorys')->where('id',$id)->first();
        //\dd($categorys);
        $categoryArray=array();
        $categoryArray['name']=$categorys->name;
        $categoryArray['id']=$id;

       return response()->json(compact('categoryArray'),200);

    }
    
    public function jwtcheck() 
    {
        try {
            $onsuccess="ok";
            $onfailed="failed";
            $user = JWTAuth::parseToken()->authenticate();
            return response()->json(compact('onsuccess'),200);
           
        } catch (Exception $e) {
            if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException){
                return response()->json(compact('onfailed'),401);
            }else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException){
                return response()->json(compact('onfailed'),401);
            }else{
                return response()->json(compact('onfailed'),401);
            }
        }
    }
    public function getArticles()
    {
        $articles = DB::table('articles')->get();
        //\dd($categorys);
        
        //\dd($array);
        return response()->json(compact('articles'),200);



    }
    public function articledetails(Request $request)
    {
        $article = DB::table('articles')->where('id',$request->articleId)->first();
        //\dd($categorys);
        
        //\dd($array);
        return response()->json(compact('article'),200);



    }
    
}
