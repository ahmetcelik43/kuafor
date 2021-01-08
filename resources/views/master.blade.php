<!doctype html>
<html lang="en" ng-app="main">

<head>
    <meta charset="iso-8859-9">
    <title>kuaforsalonu</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
    <!-- <link rel="manifest" href="site.webmanifest"> -->
    <!-- Place favicon.ico in the root directory -->
    <link rel="stylesheet" href="{{ URL::asset('bower_components/bootstrap/dist/css/bootstrap.min.css') }}" />

   <!-- <link
       rel="stylesheet"
       href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
     />
   -->
   <link rel="stylesheet" href="{{ URL::asset('css/tabs/tab.css') }}" />

     <link rel="stylesheet" href="{{ URL::asset('bower_components/angular-loading-bar/src/loading-bar.css') }}"/>
     <script src="https://kit.fontawesome.com/d1fc3fdb09.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ URL::asset('css/masaustu.css') }}" />
    <!-- <link rel="stylesheet" href="css/responsive.css"> -->
    <link rel="stylesheet" href="{{ URL::asset('css/angucomplete-alt.css') }}"/>
    <script src="{{ URL::asset('bower_components/jquery/dist/jquery.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="{{ URL::asset('bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ URL::asset('bower_components/angular/angular.min.js') }}"></script>
    <script src="{{ URL::asset('js/angular/ui-router.min.js') }}"></script>

    <!--<script src="{{ URL::asset('bower_components/angular-route/angular-route.min.js') }}"></script>-->
    <script src="{{ URL::asset('bower_components/angular-cookies/angular-cookies.min.js') }}"></script>
    <script src="{{ URL::asset('js/angular/angucomplete-alt.min.js') }}"></script>
    <script src="{{ URL::asset('bower_components/angular-animate/angular-animate.min.js') }}"></script>

    <script src="{{ URL::asset('bower_components/angular-loading-bar/src/loading-bar.js') }}"></script>

    <script src="//cdnjs.cloudflare.com/ajax/libs/angular-translate/2.18.1/angular-translate.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/angular-translate/2.18.1/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js"></script>
    
    <script src="{{ URL::asset('js/servis/main.js') }}"></script>
    <script src="{{ URL::asset('js/servis/ilanlarController.js') }}"></script>
    <script src="{{ URL::asset('js/servis/home.js') }}"></script>
    <script src="{{ URL::asset('js/servis/admin.js') }}"></script>
    <script src="{{ URL::asset('js/servis/googlegiris.js') }}"></script>
    

</head>

<body ng-controller="main"  id="main">
  <!--<div style="position: relative;width:100%;height:100%;">-->
    <hello></hello>
<div id="loading-bar"></div>
    <!-- header-start -->
    <div id="overlay"></div>
    <div class="modal loginModal" tabindex="-1" role="dialog">

      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header girisModalHeader">
            <h5 class="modal-title">Üyelik işlemleri</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body girisModalBody">
            <div class="tabs">
              <div class="tab-header">
                <div class="active" id="loginHeaderModal">
                   Login
                </div>
                <div id="registerHeaderModal">
                   Register
                </div>
              </div>
              <div class="tab-indicator"></div>
              <div class="tab-body">
                <div class="active" id="loginModalBody">
                  <p style="display:inline;">Üye Değilmisin  </p>    <a style="display:inline;cursor:pointer;font-weight:bold"  ng-click="girisRedirectModal()">Üye Ol</a>
                 <br><br>

                 <form id="girisForm" ng-submit="doLogin()" autocomplete="false">
                   <div class="form-group">
  
   <div class="inputIcon"> 
     <i class="fas fa-at" style="left:400px"> </i>
   <input placeholder="Email Yazınız" autocomplete="off" type="email" name="email" ng-model="login.email" class="form-control"  aria-describedby="emailHelp">
   </div>
  </div>
 <div class="form-group">
   <div class="inputIcon"> 
    <i class="fas fa-key" style="left:400px"></i>
   <input placeholder="Şifre Yazınız" autocomplete="off" type="password" name="sifre" ng-model="login.sifre" class="form-control" id="sifre" aria-describedby="emailHelp">
  </div>
 </div>
 <div class="form-check">
  <label class="form-check-label">
    <input type="checkbox" ng-model="login.isRemember" class="form-check-input" value="">Beni Hatırla
  </label>
</div>


 <br>
 <button type="submit" style="width:100%;" ng-disabled="!login.email || !login.sifre" class="btn btn-secondary">
  <i class="fa fa-send-o"></i>  Giriş Yap
 </button>
 <button type="button" ng-click="googleRedirect()" class="google-giris" name="button">
  <i class="fas fa-google"></i> Google İle Giriş Yap
</button>
                 </form>
                </div>
                <div id="registerModalBody">
                   register
                </div>
              
              </div>
            
             
               
              

            
              </div>
          </div>

        </div>
      </div>
    </div>
    <sidenav></sidenav>

    <header>
      <!--1. navbar-->
      <div class="mynavbar1">
      <div class="left-mynavbar1">
       <ul style="padding:0;">
         <li class="opensidebar">
           <a ng-click="sidebarOpen()" id="sidebarOpen"><i class="fa fa-bars" style="font-size:30px;color:black" aria-hidden="true"></i></a>
         </li>
         <li class="logo">
<img src="/logo/logo2.png"  style="width:50px;height:50px;display:inline" alt=""><h5 class="nav-img-text" style="display:inline">kuaforsalonu.tk</h5>
         </li>




       </ul>
      </div>
      <div class="right-mynavbar1">
       <ul>
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
             <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              dilseciniz
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
            <button ng-if="getUser().profilResmiUrl==null" class="btn btn-default dropdown-toggle" type="button" id="dropdownUserButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="/user.png" style="width:30px;" alt="<% getUser().ad %>">
            </button>
           <img ng-if="getUser().profilResmiUrl!=null" src="/logo1.jpg" style="cursor: pointer; width:50px" alt="">
            <div class="dropdown-menu dropdown-menu-right dropdown-menu-custom" aria-labelledby="dropdownUserButton">
              <a  class="dropdown-item" style="font-weight: bold"><% getUser().ad%>
                <i style="color:black;float:right;font-size:20px" class="fas fa-user-check"></i></a>

              <a class="dropdown-item">Rol : <% getUser().rolID == 2 ? 'Kuaför': 'Kullanıcı' %></a>
             
               <a class="dropdown-item">Profil<i style="float:right;font-size:20px" class="fas fa-address-card"></i></a>
              
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
           <a href="anasayfa"><% 'home' | translate %></a>
         </li>
  <li><a onclick="iletisimGoster()">contact</a>
  </li>

</li>
<li><a ui-sref="hello">browseAdvert</a>
</li>

</li>
<!--
<li><a href="admin">postAdvertFree</a>
</li>
-->
       </ul>
      </div>
      <div class="right-mynavbar">


      </div>

      </div>
    </header>
    <div class="main">
      <ui-view></ui-view>

     
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



<!--</div>-->

</body>

</html>
