main.component('sidenav', {
    templateUrl:  '/newTemplate/sidenav.html',     
    controller: function($translate,$rootScope,$scope) {
        $scope.sidebarClose = function()
        {
          $('#mySidenav').css('width','0');
          $('#overlay').fadeOut('fast');
      
        }
        
        $scope.sidebarDilKapat= function()
        {
            $('#sidanavgeri').removeClass('dilGeriClicked').addClass('dilGeri')
      
            $('.dilAc').css('display','block');
            $('.sidenavGiris').css('display','block');
            
            $('#sidenavDil').removeClass('dilClicked').addClass('dil');
            $('#sidenavDil2').removeClass('dilClicked').addClass('dil2');
      
          }
        $scope.changeLanguage = function (key) {
            $rootScope.lang = key;
            alert()
            $translate.use(key);
        };
        $scope.$on("$destroy",function() {
          $( window ).off( "resize.Viewport" );
       }); 
    }
  });