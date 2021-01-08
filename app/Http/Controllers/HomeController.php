
<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class HomeController extends Controller
{

    public function home()
    {
       // clearstatcache();

       return \File::get(public_path() . '/newTemplate/master.html');



    }
    
   
    public function googleCallback($user=null)
    {

        return view("master");



    }
    public function spadeneme()
    {

        return view("Home.spadeneme");



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