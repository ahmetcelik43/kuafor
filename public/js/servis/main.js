
    
    
    var main = angular.module('main', ['angucomplete-alt','complete','socialLogin','btford.socket-io','ngWebsocket','dropzone','isteven-multi-select','ui.router','ngCookies','angular-cache','pascalprecht.translate','angular-loading-bar','cfp.loadingBar','ngAnimate'], function($interpolateProvider) {
        //$interpolateProvider.startSymbol('<%');
        //$interpolateProvider.endSymbol('%>');
    })
    main.constant('baseUrl','http://localhost:8000');
    /*
   main.service("validationForm",function()
    {
        var validationModel={};
        validationModel.validation=function(data)
        {
          
        }
    })
    */
   main.service('socketService', function SocketService(socketFactory) {
    return socketFactory({
    ioSocket: io.connect("http://127.0.0.1:8001",{transports:['websocket']})
    });    
    });
main.factory('authFactory', function authFactory($http,$state,$location,$cookies,$stateParams) {
        var userModel={};
        //let cache=$cacheFactory("sehirveilce");

        userModel.putCache=function(value)
        { 
            //$cacheFactory('a').remove("key")
            if (angular.isUndefined(cache.get("key"))) {

                 cache.put("key",value);
            }
            
          //let cache = $cacheFactory("b") ? $cacheFactory("b").get("key") : $cacheFactory("b");
        }
        userModel.getCache=function()
        {
            //$cacheFactory("ilveilce").removeAll();
           // let cache=$cacheFactory("d");
            //console.log(cache.put("a","Ahmet"));

            //console.log(cache.get("a"))
            return cache.get("key");
            //return $cacheFactory("b") ? $cacheFactory("b").get("key") : $cacheFactory("b");
                       
        }
        userModel.getUser=function()
        {
            //return angular.fromJson(CacheFactory.get('user'));
            return angular.fromJson($cookies.get('user'));
        }
        
        userModel.closeModal= function()
        {
            return $('.loginModal').modal('hide');
        }
        userModel.doLogin = function(loginData)
        {
           return $http({

                header:{
                    "content-type":"application/json",
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            
                },
                url:'/login',
                method:"POST",
                data:{
                    email:loginData.email,
                    password:loginData.password,
                    //isRemember:loginData.isRemember
           
                },
            
            }).then(function(response){
                toastr.success("Giriş Başarılı");
                //this.createCache('user');
                //this.putCache('user' , JSON.stringify(response.data.user));
                $cookies.put('user',JSON.stringify(response.data.user)); 
                
                                
                 if($stateParams.prevUrl) return $state.href($stateParams.prevUrl);
                 return $state.go('home');
            })
                 .catch(function(){
                    $('.loginModal').modal('hide');
                    toastr.error("Giriş Başarısız")
            });
            
        }
        userModel.doRegister = function(registerData)
        {
           return $http({
                header: {
                    "content-type":"application/json",
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            
                },
                url: '/login/register',
                method: "POST",
                data: registerData,
            
            }).then(function(response){ 
                var user = response.data.user[0];
                toastr.success("Kayıt başarılı");

                if(user.rol == "Kuafor"){
                    $cookies.put("user",JSON.parse(res.user));
                    //this.putCache( JSON.stringify(user));
                    return $state.go('kuaforFormDoldur');    
                }
                $state.go('home'); 
             }).catch(function(){
                toastr.error("Hata oluştu veya kullanıcı mevcut");
            });
        }
        userModel.getAuthStatus = function()
        {
          return  $cookies.get('user') ? true : false ;
        }
       
        userModel.logOut = function()
        {
            //CacheFactory.remove('user');
           $cookies.remove('user');
           $location.search({});
           $location.path('/');
           
        }
       
         return userModel;  
       
    });
    
    main.factory('Data', function Data($http) {
        return{
            get: function get(url) {

                 return $http.get(url);
                 },
        
        
            post: function post(url,data) {

                 return $http({
                    header: {
                        "content-type":"application/json",
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                
                    },
                    url: url,
                    method: "POST",
                    data: data                
                });
                 },
        }
    });
    
    main.run(function ($rootScope,$animate,$transitions,authFactory,$state,$stateParams,$http,$cookies,$location,$websocket) {

        $animate.enabled(true);
        $rootScope.$on('event:social-sign-in-success', function(event, userDetails){
           $http({

            header:{
                "content-type":"application/json",
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        
            },
            url:'/login/google',
            method:"POST",
            data:{"email":userDetails.email,"ad":userDetails.name}
        }).then(function(res){
            
            if(res.status==201 && res.data.message == "userexits") {
                $cookies.put("user",JSON.stringify(res.data.user[0]));
                $stateParams.prevUrl ? 
                 $location.path($stateParams.prevUrl.replace('/','')) : $state.go('home');

            }
            else if(res.data.message == "usernotexits") $state.go('googleCallback',{email:res.data.email,name:res.data.name});//kayıt olması için.
        }).catch(function(err){toastr.error(err);
        });
        });

        $transitions.onBefore({}, function(transition) {
            
        const cookie = authFactory.getUser() ? angular.fromJson(authFactory.getUser()) : false ;
            
        const kuafor = ["kuaforFormDoldur"].indexOf(transition.to().name) === -1; //yoksa
 
   //var protected =angular.isDefined(transition.to().protected) ? transition.to().protected :false;
   if(!authFactory.getAuthStatus() &&  transition.to().protected)
     //$state.go('home',{loginModal:true,prevUrl:transition.from().name});
     return transition.router.stateService.target('home',{loginModal:true,prevUrl:transition.to().url});
 
    if(angular.isDefined(transition.to().data) && cookie && 
    transition.to().data != cookie.rol && !kuafor)
    {      
        
            authFactory.logOut(); 
            return transition.router.stateService.target('home',{loginModal:true , prevUrl:transition.to().url}); 
        
       
    }
    });
    /*
    $transitions.onStart({}, function(transition) {
      

    });
    
    $transitions.onError({ from: 'home' }, function(transition) {

    });
    */
    $transitions.onSuccess({}, function() {
     if($stateParams.loginModal) $('.loginModal').modal('show');
    });   
        $rootScope.lang = 'tr';
        
       /* var ws = $websocket.$new('ws://localhost:8001');

        ws.$on('$open', function () {
              console.log("opened")
              //ws.$emit("hello","ana");

            })
            ws.$on('hello', function () {
alert()
                //ws.$emit("hello","ana");
  
              })
         */
       

});
   
    main.config(function ($locationProvider,$httpProvider,$translateProvider,$stateProvider,cfpLoadingBarProvider,socialProvider,CacheFactoryProvider,
        ) {


        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks:true        
        });
        socialProvider.setGoogleKey("521718043852-fke86sg5rinv87u26btm7k664i5ja89r.apps.googleusercontent.com");
        angular.extend(CacheFactoryProvider.defaults, { maxAge: 15 * 60 * 1000 ,deleteOnExpire: 'aggressive',recycleFreq: 60000});

        
       var master = {
        name: 'master',
        abstract: true,
       // templateUrl: 'newTemplate/master.html', 
        controller: 'main',
    };  
       var home = {
        name: 'home',
        parent: master,
        url: '/:loginModal?/:prevUrl?/:referrer?',
        templateUrl: '/newTemplate/home.html', 
        controller: 'home'
    };
    var googleCallback = {
        name: 'googleCallback',
        parent: master,
        url: '/googleCallback/:name?/:email?/:url?',
        templateUrl: '/newTemplate/googleCallback.html', 
        controller: 'googleCallback'
    };
    var ilanlar = {
        name: 'ilanlar',
        parent: master,
        url: '/ilanlar',
        templateUrl: '/newTemplate/ilanlar.html',
        controller:'ilanlar',
        protected:true
        };
        var kuaforFormDoldur = {
            name: 'kuaforFormDoldur',
            parent: master,
            url: '/ilan-yayınla',
            templateUrl: '/newTemplate/kuaforFormDoldur.html',
            controller:'formDoldur',
            protected:true,
            data: "Kuafor"
        };
        var profil = {
            name: 'profil',
            parent: master,
            url: '/profil',
            templateUrl: '/newTemplate/profil.html',
            controller:'profil',
            protected:true
        };
        var yayinlananilanlar = {
            name: 'yayinlananilanlar',
            parent: master,
            url: '/yayinlanan-ilanlar',
            templateUrl: '/newTemplate/yayinlananilanlar.html',
            controller:'yayinlananilanlar',
            protected:true
        };
      
      $stateProvider.state(master).state(home).state(ilanlar).state(googleCallback).state(kuaforFormDoldur).state(profil)
      .state(yayinlananilanlar); 
  

    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.includeBar = true;

    cfpLoadingBarProvider.parentSelector = '#loading-bar';

      
        
        $httpProvider.defaults.useXDomain = true;
        $translateProvider
        .useStaticFilesLoader({
            prefix: '/translate/locale-',
            suffix: '.json'
        })
        .useSanitizeValueStrategy('sanitizeParameters')
        .preferredLanguage('tr');

        

       
    });

   
   
main.controller('main' ,function($scope,$state,$translate,$rootScope,cfpLoadingBar,$timeout,authFactory)
{

     cfpLoadingBar.start();
     /*var ws= $websocket.$new('ws://localhost:8000');
     ws.$on('$open', function () {
        console.log(1234);
        ws.$emit('hello', 'world'); // it sends the event 'hello' with data 'world'

      })

   

        ws.$on("hello",function(m){
            alert(m);
        })
    */
   

     //mySocket.init().emit("test","hasan");

    //mySocket.sub();
    //socketFactory().emit("test","merhaba");
     $scope.kapat= function()
     {
//        mySocket.pub("merhaba");

        $('.bilgilendirme').css("display","none");
        $('.header').css("margin-top","-50px");
        //mySocket.forward('test',$scope);

     }
$scope.$on("$destroy",function() {    
    $( window ).off( "resize.Viewport" );
 });
$scope.linkActive={
    ilanYayinla:false
}

    $scope.authCheck = function()
    {
        return authFactory.getAuthStatus();
    }
    $scope.getUser = function()
    {
        return authFactory.getUser();
    }
    $scope.logOut = function()
    {
        
       authFactory.logOut();
       $state.href('/');
    }
   
    $scope.changeLanguage = function (key) {
        $rootScope.lang = key;
        $translate.use(key);
    };
   $scope.sidebarOpen=function()
   {
       $('#mySidenav').css({'width':'200px','z-index':'99999'});
       
       //$('#mySidenav').css('opacity','1 !important');
      // $('body > :not(#mySidenav)').css('box-shadow','0 0 0 99999px rgba(0, 0, 0, .8)');
      $('#overlay').fadeIn('fast');
      $('#logo2').fadeIn();
      //$('#mySidenav').css('z-index','99999');
      
    }
   $(document).on('click', function (event) {
    if (!$(event.target).closest('#mySidenav , #sidebarOpen').length && $('#mySidenav').css('width')=="200px") {
        $('#mySidenav').css('width','0px');   
        $('#overlay').fadeOut('fast');
        $('#logo2').fadeOut();

    }
  
  });
 
  $scope.sidebarDilAc = function()
  {
      //$('#mySidenav > a:not(.dil):not(.closebtn)').fadeOut('fast');
      $('.sidenavGiris').css('display','none')
      $('.dilAc').css('display','none')

      $('.closebtn').css('display','inline-block')
      $('#sidanavgeri').removeClass('dilGeri').addClass('dilGeriClicked')
      $('#sidenavDil').removeClass('dil').addClass('dilClicked');
      $('#sidenavDil2').removeClass('dil2').addClass('dilClicked');

  }
  $scope.loginModalOpen=function()
  {
      $('.loginModal').modal('show');
  }
  $scope.mobilMesajAc=function()
  {
    $(".mobil-menu").fadeIn();
    $('.mobil-menu #mobil-bildirimler,#mobil-dil').fadeOut();

       
    $('.mobil-menu #mobil-messages').fadeIn();

  }
  $scope.mobilMenuClose=function()
  {
    $(".mobil-menu").fadeOut();

  }

    $timeout(function() {
        cfpLoadingBar.complete();
    }, 2000);
});