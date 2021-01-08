
main.component('loginModal', {
    templateUrl:  '/newTemplate/loginModal.html',     
    controller: function($http,$translate, authFactory ,$scope, cfpLoadingBar , $cookies , $state,$stateParams,$timeout) {
      //console.log($stateParams.param);
       
          let tabHeader = document.getElementsByClassName("tab-header")[0];
          let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
          let tabBody = document.getElementsByClassName("tab-body")[0];
          let tabsPane = tabHeader.getElementsByTagName("div");
          $scope.$on("$destroy",function() {
            $( window ).off( "resize.Viewport" );
         });
        $scope.doRegister=function()
      {

        cfpLoadingBar.start();
      
        var registerData = {
          email:$scope.register.email,
          password:$scope.register.password,
          ad:$scope.register.ad,
          rolID:$scope.register.rolID
          }
        authFactory.doRegister(registerData);
        
    
        $timeout(function() {
      cfpLoadingBar.complete();
     }, 2000);
      }
        $scope.doLogin=function()
        {
          cfpLoadingBar.start();
      
            var loginData_ = {
              email:$scope.login.email,
              password:$scope.login.password
              //isRemember:this.login.isRemember
            }
            authFactory.doLogin(loginData_);
            $timeout(function() {
          cfpLoadingBar.complete();
         }, 2000);
        }
       
     

function manualRedirectToRegister()
  {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById('registerHeaderModal').classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById('registerModalBody').classList.add("active");
    
    tabIndicator.style.left = `calc(calc(100% / 2) * 1)`;
  }
  
  function manualRedirectToLogin()
  {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById('loginHeaderModal').classList.add("active");
    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    document.getElementById('loginModalBody').classList.add("active");
    
    tabIndicator.style.left = `calc(calc(100% / 2) * 0)`;
  }
  $scope.girisRedirectModal=function()
  {       
      manualRedirectToRegister();
  }
  tabsPane[1].addEventListener("click",function(){
    manualRedirectToRegister();
  
  });
  tabsPane[0].addEventListener("click",function(){
    manualRedirectToLogin();
  
  });   
  $scope.manualRedirectToLogin=function()
  {
    manualRedirectToLogin();
  } 
    }
  });