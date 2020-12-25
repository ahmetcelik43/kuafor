<!doctype html>
<html lang="en">

<head>
    <meta charset="iso-8859-9">
    <title>@yield('title')</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- <link rel="manifest" href="site.webmanifest"> -->
    <!-- Place favicon.ico in the root directory -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <link
       rel="stylesheet"
       href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
     />
    <link rel="stylesheet" href="{{ URL::asset('landing/css/font-awesome.min.css') }}">

    <link rel="stylesheet" href="{{ URL::asset('css/masaustu.css') }}" />
    <!-- <link rel="stylesheet" href="css/responsive.css"> -->

    <link rel="stylesheet" href="{{ URL::asset('css/AddTabs.css') }}" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <script src="{{ URL::asset('js/angular/angular.min.js') }}"></script>
    <script src="{{ URL::asset('js/servis/main.js') }}"></script>
    <script src="{{ URL::asset('js/angular/angucomplete-alt.min.js') }}"></script>
    <link rel="stylesheet" href="{{ URL::asset('css/angucomplete-alt.css') }}"/>
    @yield('heads')
</head>

<body ng-app="main" ng-controller="main" id="main">
 
    <!-- header-start -->
    <div class="modal loginModal" tabindex="-1" role="dialog">

      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Üyelik işlemleri</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div data-addui='tabs'>
              <div role='tabs'>
                <div onclick="girisTabYonlendir() " >{{ trans('page.girisYap') }}</div>
                <div onclick="kayitTabYonlendir()" id="kayitTabHeader">{{ trans('page.kayitOl') }}</div>

              </div>
              <div role='contents'>
                <div class="container-fluid" id="login">
                  <h4>{{ trans('page.girisYap') }}</h4>
                  <p>Üye Değilmisin</p> <a style="display:inline"  onclick="girisRedirect()">Üye Ol</a>
                 <button type="button" style="background-color:#3b5998;width:100%;border:none;height:60px;border:none" name="button">
                   {{ trans('page.faceGiris') }}
                 </button>

                 <form id="girisForm">
                   <div class="form-group">
  
   <label for="exampleInputEmail1">Email</label>
   <input type="email" name="email" id="email" class="form-control"  aria-describedby="emailHelp">
    </div>
 <div class="form-group">
   <label for="exampleInputEmail1" id="sifreLabel">{{ trans('page.sifre') }}</label>
   <input type="password" name="sifre" class="form-control" id="sifre" aria-describedby="emailHelp">

 </div>
 <br>
 <button type="submit" style="width:100%;" class="btn btn-secondary">
   {{ trans('page.girisYap') }}
 </button>
                 </form>
                </div>
                <div id="register">
  asda
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
      <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" ng-click="sidebarClose()">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

    <header>
      <!--1. navbar-->
      <div class="mynavbar1">
      <div class="left-mynavbar1">
       <ul style="padding:0;">
         <li class="opensidebar">
           <a ng-click="sidebarOpen()"><i class="fa fa-bars" style="font-size:30px;color:black" aria-hidden="true"></i></a>
         </li>
         <li class="logo">
<img src="/logo/logo2.png" style="width:50px;height:50px;display:inline" alt=""><h5 style="display:inline">kuaforsalonu.tk</h5>
         </li>




       </ul>
      </div>
      <div class="right-mynavbar1">
       <ul>

         <li>
           <div class="dropdown">
             <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               {{ trans('page.dilseciniz') }}
             </button>
             @php $locale = session()->get('locale'); @endphp

             <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                 @if ($locale=='tr')
                 <a class="dropdown-item" onclick="changedLangToTr()" href="/lang/tr" >Türkçe        <i style="color:green;float:right;font-size:20px" class="fa fa-check"></i></a>
                 <a class="dropdown-item" onclick="changedLangToEn()" href="/lang/en" >English</a>

                 @else
                 <a class="dropdown-item" onclick="changedLangToTr()" href="/lang/tr" >Türkçe</a>
                 <a class="dropdown-item" onclick="changedLangToEn()"  href="/lang/en" >English      <i style="color:green;float:right;font-size:20px" class="fa fa-check"></i></a>

                 @endif

             </div>
           </div>
         </li>
         <li>
           <button class="btn btn-primary" onclick="loginModalOpen()" type="button" name="button">
         {{ trans('page.Login') }}
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
           <a>{{trans('page.Home')}}</a>
         </li>
  <li><a onclick="iletisimGoster()"><%message%></a></li>
       </ul>
      </div>
      <div class="right-mynavbar">


      </div>

      </div>
    </header>
    <div class=" main">
    @yield('main')
     


<div class="row footer text-center">

    <div class="col-md-6 col-xs-6 ">
      <ul>
        <li><a>{{trans('page.Home')}}</a></li>
          <li><a>{{trans('page.Login')}}</a></li>
          <li><a onclick="iletisimGoster()">İletişim</a></li>
          <li><a onclick="aramaGoster()">İlan ara</a></li>

      </ul>
    </div>
    <div class="col-md-6 col-xs-6 ">
      <ul>
        <li><img src="/logo/logo2.png"  style="display:inline" alt=""><h3 style="display:inline">kuaforsalonu.tk</h3></li>
        <li>     <a onclick="gosterTop()"><i class="fa fa-arrow-up" style="font-size:40px;"></i></a></li>
      </ul>
    </div>
</div>
</div>


 


  <script type="text/javascript">
    var lang = "@php echo $locale; @endphp";
     function changedLangToTr()
     {
       lang = 'tr'
     }
     function changedLangToEn()
     {
       lang = 'en'
     }
  </script>

  <script src="{{ URL::asset('js/AddTabs.js') }}"></script>
  

</body>

</html>
