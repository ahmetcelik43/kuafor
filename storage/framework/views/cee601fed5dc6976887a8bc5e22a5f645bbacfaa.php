<?php
$url = "http://".$_SERVER["SERVER_NAME"];
 ?>
<!doctype html>
<html lang="en" ng-app="main">

<head>
    <meta charset="iso-8859-9">
    <title>kuaforsalonu</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="appUrl" content="<?php echo($url); ?>">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>"/>
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
    <!-- <link rel="manifest" href="site.webmanifest"> -->
    <!-- Place favicon.ico in the root directory -->
    <link rel="stylesheet" href="<?php echo e(URL::asset('bower_components/bootstrap/dist/css/bootstrap.min.css')); ?>" />
    <link
       rel="stylesheet"
       href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
     />
   
   <link rel="stylesheet" media=" screen and (max-width: 850px)" href="<?php echo e(URL::asset('css/mobil.css')); ?>" />
   <link rel="stylesheet" media=" screen and (min-width: 851px)" href="<?php echo e(URL::asset('css/masaustu.css')); ?>" />
   <link rel="stylesheet" href="<?php echo e(URL::asset('css/mastercss.css')); ?>" />

   <link rel="stylesheet" href="<?php echo e(URL::asset('/css/tabs/tab.css')); ?>" />
     <link rel="stylesheet" href="<?php echo e(URL::asset('css/toastr.min.css')); ?>" />
     <link rel="stylesheet" href="<?php echo e(URL::asset('css/isteven-multi-select.css')); ?>" />
     <link rel="stylesheet" href="<?php echo e(URL::asset('bower_components/dropzone/dist/min/dropzone.min.css')); ?>" />

     <link rel="stylesheet" href="<?php echo e(URL::asset('bower_components/angular-loading-bar/src/loading-bar.css')); ?>"/>
     <script src="https://kit.fontawesome.com/d1fc3fdb09.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="<?php echo e(URL::asset('css/masaustu.css')); ?>" />
    <link rel="stylesheet" href="<?php echo e(URL::asset('css/angucomplete-alt.css')); ?>"/>
    <script src="<?php echo e(URL::asset('bower_components/jquery/dist/jquery.min.js')); ?>"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
   <script src="<?php echo e(URL::asset('bower_components/bootstrap/dist/js/bootstrap.min.js')); ?>"></script>

   <script src="<?php echo e(URL::asset('bower_components/angular/angular.min.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('js/angular/ui-router.min.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('js/isteven-multi-select.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('js/clipboard.min.js')); ?>"></script>

    <!--<script src="<?php echo e(URL::asset('bower_components/angular-route/angular-route.min.js')); ?>"></script>-->
    <script src="<?php echo e(URL::asset('bower_components/angularjs-social-login/angularjs-social-login.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('bower_components/angular-cache/dist/angular-cache.min.js')); ?>"></script>

    <script src="<?php echo e(URL::asset('bower_components/angular-cookies/angular-cookies.min.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('js/angular/angucomplete-alt.min.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('bower_components/angular-animate/angular-animate.min.js')); ?>"></script>

    <script src="<?php echo e(URL::asset('bower_components/angular-loading-bar/src/loading-bar.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('bower_components/dropzone/dist/min/dropzone.min.js')); ?>"></script>

    <script src="//cdnjs.cloudflare.com/ajax/libs/angular-translate/2.18.1/angular-translate.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular-translate/2.18.1/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js"></script>
    <script src="<?php echo e(URL::asset('js/toastr.min.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('js/servis/main.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('js/dropzone.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('components/home.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('components/ilanlar.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('components/loginmodal.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('components/sidenav.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('components/googleCallback.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('components/formDoldur.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('components/ilveilce.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('components/altComponents/phoneInput.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('components/altComponents/dropzoneCtrl.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('js/angular/uniqID.js')); ?>"></script>
    <script src="<?php echo e(URL::asset('components/profil.js')); ?>"></script>


</head>

<body ng-controller="main" id="main">
  <!--<div style="position: relative;width:100%;height:100%;">-->
<div id="loading-bar"></div>
    <!-- header-start -->
    <div id="overlay"></div>
    <login-modal></login-modal>
    <sidenav></sidenav>
    <div class="bilgilendirme">
      <small>
        <i class="fas fa-info-circle"></i> Bu Web Sitesi Tamamen Ücretsizdir.
        Bu siteyi kullanan herkes bu şartları kabul etmiş sayılır ve her türlü kötü kullanımda sorumluluk kişiye aittir.
      </small>
      <i ng-click="kapat()" class="fas fa-times" style="font-size: 30px;color:#fc6a87"></i>
    </div>
    <br>
    <br>
    <header class="header">
      <!--1. navbar-->
      <div class="mynavbar1">
      <div class="left-mynavbar1">
       <ul style="padding:0;">
         <li class="opensidebar">
           <a ng-click="sidebarOpen()" id="sidebarOpen"><i class="fa fa-bars" style="font-size:30px;color:black" aria-hidden="true"></i></a>
         </li>
         <li class="logo-masaustu">
<img src="/logo/logo2.png"  style="width:50px;height:50px;display:inline" alt=""><h5 class="nav-img-text" style="display:inline">kuaforsalonu.tk</h5>
         </li>

       </ul>
      </div>
      <div class="right-mynavbar1">
      
          
       <ul>
        <li class="logo-mobil">
          <img src="/logo/logo2.png"  style="width:50px;height:50px;display:inline" alt=""><h5 class="nav-img-text" style="display:inline">kuaforsalonu.tk</h5>
        </li>
   <li ng-if="authCheck()">
    <div class="dropdown" ng-init="array=['Ahmet','Timur','asdsa','sdadas']">
      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMessageButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="far fa-envelope-open" style="font-size: 25px"></i>
      </button>
      <div class="dropdown-menu dropdown-menu-right dropdown-menu-custom" style=" overflow-y:auto;text-align:center" aria-labelledby="dropdownMessageButton">
        <p>Mesajlar</p>
        <div class="media border p-3" ng-repeat="i in array">
          <img src="/logo1.jpg" alt="John Doe" class="align-self-start mr-3 rounded-corners" style="width:60px;">
          <div class="media-body">
            <h6>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
            <p><% i %></p>
          </div>
        </div>
        <p>Tümünü Gör</p>
      </div>
    </div>
   </li>
    <li ng-if="authCheck()">
    <div class="dropdown" ng-init="array=['Ahmet','Timur','asdsa','sdadas']">
      <button class="btn btn-default dropdown-toggle" type="button" id="dropdownBellButton" data-toggle="dropdown" aria-haspopup="false" aria-expanded="true">
        <i class="far fa-bell" style="font-size: 25px"></i>

      </button>
      <div class="dropdown-menu dropdown-menu-right dropdown-menu-custom" style="overflow-y:auto;text-align:center" aria-labelledby="dropdownBellButton">
        <p>Bildirimler</p>
        <div class="media border p-3" ng-repeat="i in array">
          <img src="/logo1.jpg" alt="John Doe" class="align-self-start mr-3 rounded-corners" style="width:60px;">
          <div class="media-body">
            <h6>John Doe <small><i>Posted on February 19, 2016</i></small></h4>
            <p><% i %></p>
          </div>
        </div>
        <p>Tümünü Gör</p>
      </div>
    </div>
   </li>
         <li id="dilsecDesktop">
           <div class="dropdown">
             <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="far fa-flag" style="font-size: 25px"></i>
             </button>

             <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a ng-show="lang=='tr'" class="dropdown-item" ng-click="changeLanguage('tr')">Türkçe        <i style="color:green;float:right;font-size:20px" class="fa fa-check"></i></a>
              <a ng-show="lang=='tr'" class="dropdown-item" ng-click="changeLanguage('en')">English</a>

              <a ng-show="lang=='en'" class="dropdown-item" ng-click="changeLanguage('tr')">Türkçe    </a>
              <a ng-show="lang=='en'" class="dropdown-item" ng-click="changeLanguage('en')">English      <i style="color:green;float:right;font-size:20px" class="fa fa-check"></i></a>


             </div>
           </div>
         </li>
         <li ng-if="authCheck()">
          <div class="dropdown">
            <button ng-if="getUser().profileImage==null" class="btn btn-default dropdown-toggle" type="button" id="dropdownUserButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="/user.png" style="width:30px;" alt="<% getUser().ad %>">
            </button>
           <img ng-if="getUser().profileImage!=null" src="/logo1.jpg" style="cursor: pointer; width:50px" alt="">
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownUserButton">
            <a  class="dropdown-item" style="font-weight: bold">{{getUser().ad}}
                <i style="color:black;float:right;font-size:20px" class="fas fa-user-check"></i></a>

              <a class="dropdown-item">Rol : {{getUser().rol}} </a>
             
               <a href="profil" class="dropdown-item">Profil<i style="float:right;font-size:20px" class="fas fa-address-card"></i></a>
              
               <a  ng-click="logOut()" class="dropdown-item">Çıkış
                 <i style="float:right;font-size:20px" class="fas fa-sign-out-alt"></i></a>
            </div>
          </div>
        </li>
         <li ng-if="!authCheck()">
           <button class="btn btn-primary" ng-click="loginModalOpen()" type="button" name="button">
            Login
           </button>

         </li>
         
       </ul>

      </div>

      </div>

      <!--2. navbar-->
      <div class="mynavbar">
      <div class="left-mynavbar">
       <ul>

         <li>
           <a href="/">{{ 'home' | translate }}</a>
         </li>
  <li><a onclick="iletisimGoster()">contact</a>
  </li>

</li>
<li><a href="ilanlar">İlan Ara</a>
</li>
<li ng-if="getUser().rol == 'Kuafor'"><a ng-style="linkActive.ilanYayinla ? {'color':'#a40cf0','text-decoration':'underline'} : ''" href="ilan-yayınla">İlan Yayınla</a>
</li>

</li>
<!--
<li><a href="admin">postAdvertFree</a>
</li>
-->
       </ul>
      </div>
     
      </div>
    </header>
    <div class="main">
      
    <div class="mobil-menu">
      <div id="mobil-messages" ng-init="array=['AHMET','ZATİYE','TİMUR']">
        <div class="mobil-menu-header">
          <p>Mesajlar</p>
           <i ng-click="mobilMenuClose()" class="fas fa-times"></i> 
       </div>
        <br><br>
        <div  class="media border p-3" ng-repeat="i in array">
          <img src="/logo1.jpg" alt="John Doe" class="align-self-start mr-3 rounded-corners" style="width:60px;">
          <div class="media-body">
            <h6><% i %> <small><i>Posted on February 19, 2016</i></small></h4>
            <p><% i %></p>
          </div>
        </div>
        <p>Tümünü Gör</p>
      </div>
      <div id="mobil-bildirimler" ng-init="array=['AHMET','ZATİYE','TİMUR']">
        <div class="mobil-menu-header">
          <p >Bildirimler</p>
          <i class="fas fa-times"></i> 
        </div>
        <br><br>
             <div  class="media border p-3" ng-repeat="i in array">
          <img src="/logo1.jpg" alt="John Doe" class="align-self-start mr-3 rounded-corners" style="width:60px;">
          <div class="media-body">
            <h6><% i %> <small><i>Posted on February 19, 2016</i></small></h4>
            <p><% i %></p>
          </div>
        </div>
        <p>Tümünü Gör</p>
      </div>  
      <div id="mobil-dil">
        <div class="mobil-menu-header">
          <p>Dil</p>
          <i class="fas fa-times"></i> 
        </div>
        <br><br>
        <a ng-show="lang=='tr'" class="dropdown-item" ng-click="changeLanguage('tr')">Türkçe        <i style="color:green;float:right;font-size:20px" class="fa fa-check"></i></a>
        <a ng-show="lang=='tr'" class="dropdown-item" ng-click="changeLanguage('en')">English</a>

        <a ng-show="lang=='en'" class="dropdown-item" ng-click="changeLanguage('tr')">Türkçe    </a>
        <a ng-show="lang=='en'" class="dropdown-item" ng-click="changeLanguage('en')">English      <i style="color:green;float:right;font-size:20px" class="fa fa-check"></i></a>

      </div>
    </div>
<div ui-view>
  
</div>
     
      <div class="row footer text-center">

        <div class="col-md-6 col-xs-6">
          <ul>
            <li><a><% 'home' | translate %></a></li>
              <li><a>Login</a></li>
              <li><a onclick="iletisimGoster()">İletişim</a></li>
              <li><a onclick="aramaGoster()">İlan ara</a></li>
      
          </ul>
        </div>
        <div class="col-md-6 col-xs-6">
          <ul>
            <li><img src="/logo/logo2.png"  style="display:inline" alt=""><h3 style="display:inline">kuaforsalonu.tk</h3></li>
            <li>     <a onclick="gosterTop()"><i class="fa fa-arrow-up" style="font-size:25px;"></i></a></li>
          </ul>
        </div>
      </div>

</div>

<div class="mobil-alt">
  <ul>
    <li>
     <a ng-click="mobilMesajAc()"> <i class="far fa-envelope-open" style="font-size: 20px"></i></a>
    </li>
  <li>
    <a ng-click="mobilBildirimAc()"><i class="far fa-bell" style="font-size: 20px"></i></a>

  </li>
<li>
 <a ng-click="mobilDilAc()"> <i class="far fa-flag" style="font-size: 20px"></i></a>
</li>  
</ul>
</div>

<!--</div>-->

</body>

</html>
<?php /**PATH C:\Users\dell\blogApi\blogapi\public\newTemplate/master.blade.php ENDPATH**/ ?>