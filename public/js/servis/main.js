
    var main = angular.module('main', ['angucomplete-alt','ngRoute','ngCookies','pascalprecht.translate','angular-loading-bar','cfp.loadingBar','ngAnimate'], function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    })
    //main.constant('baseUrl','http://localhost:8000');

    main.config(function ($locationProvider,$httpProvider,$translateProvider,$routeProvider,cfpLoadingBarProvider) {
        $routeProvider  
        .when('/admin', {
            templateUrl : 'templates/admin.html',
            controller  : 'admin'
        })  
        .when('/ilanlar', {
            templateUrl : 'templates/ilanGozat.html',
            controller  : 'ilanlar'
        })  
      
        .when('/:loginModal?', {
            templateUrl : 'templates/home.html',
            controller  : 'home'          

        }).when('/anasayfa/:loginModal?', {
            templateUrl : 'templates/home.html',
            controller  : 'home'
            
        })
        
       .otherwise({
           redirectTo:'/'
       })

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            //rewriteLinks:false        
        });
      




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
    main.factory('authFactory', function authFactory($http,$cookies) {
        var userModel={};
        userModel.doLogin = function(loginData)
        {
           return $http({

                header:{
                    "content-type":"application/json",
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            
                },
                url:baseUrl + '/login',
                method:"POST",
                data:{
                    email:loginData.email,
                    sifre:loginData.sifre,
                    isRemember:loginData.isRemember
//                    _token: $('meta[name="csrf-token"]').attr('content')
            
                },
            
            })
        }
        userModel.getAuthStatus = function()
        {
          return $cookies.get('laravel_session') && $cookies.get('userRolID') ? true : false ;
        }
         return userModel;  
       
    });
    main.run(function ($rootScope,authFactory,$location) {
        $rootScope.$on('$routeChangeStart',function(event ,next ,current)
        {
            //public pages.
            //console.log(event);
            var restrictedPage = $.inArray($location.path(), ['/', '/anasayfa','/admin']) === -1;

            if(restrictedPage && !authFactory.getAuthStatus())
            {
                    $location.path('/1');
                
            }
            console.log(current);
        })
    
        $rootScope.lang = 'tr';
        
    });
 
    main.factory('Data', function Data($http) {
        return{
            get: function get(url) {

                 return $http.get(url);
                 },
        }
    });
main.controller('main' ,function($scope,$location,$translate,$rootScope,$cookies,cfpLoadingBar,$timeout,authFactory,$routeParams)
{
//    console.log($cookies.get('laravel_session'));

    
    cfpLoadingBar.start();
    $timeout(function() {
        cfpLoadingBar.complete();
    }, 2000);


   
  $scope.doLogin=function()
  {
    cfpLoadingBar.start();

      var loginData_ = {
        email:$scope.login.email,
        sifre:$scope.login.sifre,
        isRemember:$scope.login.isRemember
      }
      authFactory.doLogin(loginData_)
      .then(function(response){  $cookies.put('userRolID',response.data.rolID); })
      .catch(function(error){console.log(error)});
  
      $timeout(function() {
    cfpLoadingBar.complete();
   }, 2000);
  
   }
   $scope.sidebarOpen=function()
   {
       $('#mySidenav').css({'width':'200px','z-index':'99999'});
       
       //$('#mySidenav').css('opacity','1 !important');
      // $('body > :not(#mySidenav)').css('box-shadow','0 0 0 99999px rgba(0, 0, 0, .8)');
      $('#overlay').fadeIn('fast');
      //$('#mySidenav').css('z-index','99999');
      
    }
   $(document).on('click', function (event) {
    if (!$(event.target).closest('#mySidenav , #sidebarOpen').length && $('#mySidenav').css('width')=="200px") {
        $('#mySidenav').css('width','0px');   
        $('#overlay').fadeOut('fast');

    }
  
  });
  $scope.sidebarClose = function()
  {
    $('#mySidenav').css('width','0');
    $('#overlay').fadeOut('fast');

  }
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
  $scope.sidebarDilKapat= function()
  {
      $('#sidanavgeri').removeClass('dilGeriClicked').addClass('dilGeri')

      $('.dilAc').css('display','block');
      $('.sidenavGiris').css('display','block');
      
      $('#sidenavDil').removeClass('dilClicked').addClass('dil');
      $('#sidenavDil2').removeClass('dilClicked').addClass('dil2');

    }
    $scope.loginModalOpen=function()
    {
        $('.loginModal').modal('show');
    }
    $scope.girisTabYonlendir=function()
{
  $('#login').css('display','block')
  $('#register').css('display','none')
  var el = $('div[role="tabs"]').children()
  el.eq(1).removeClass('addui-Tabs-active')

  el.eq(0).addClass('addui-Tabs-active')
}
$scope.kayitTabYonlendir=function()
{

    $('#login').css('display','none')
    $('#register').css('display','block')
    var el = $('div[role="tabs"]').children()
    el.eq(0).removeClass('addui-Tabs-active')

    el.eq(1).addClass('addui-Tabs-active')

}

$scope.girisRedirectModal=function()
{
    manualRedirectToRegister();

}
$scope.changeLanguage = function (key) {
    $rootScope.lang = key;
    $translate.use(key);
};


});