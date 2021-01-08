


    main.controller('home' ,function(Data,$scope,$filter,$stateParams)
    {
        $scope.$on("$destroy",function() {
            $( window ).off( "resize.Viewport" );
         });    
        var allData=[];
        $scope.illerDesktop=[];
        $scope.ilcelerDesktop=[];
        //$scope.appUrl = angular.element('#main').scope().appUrl;
        
        $scope.secIlDesktop = function (il) {
            
            if (!angular.isUndefined(il)) 
                $scope.il = il.originalObject;
            
        }
        $scope.secIlceDesktop = function (ilce) {
            
            if (!angular.isUndefined(ilce)) 
                $scope.ilce = ilce.originalObject;
            
        }
        
        $scope.sehirDesktopInit = function ()
        {
           Data.get($("meta[name='appUrl']").content + '/ilveilce.json').then(function (response) {
           // response.header("Access-Control-Allow-Origin", "*");
           allData = response.data;
            var data = [...new Set(response.data.map(item => item.il))]; 
            data.map((item)=>{
                return $scope.illerDesktop.push({"il":item });
            })
          
       });
        }
       $scope.$watch('il',function(Value){
        
           if(Value){
    
           $('.inputIcon > .fa-remove').fadeIn('fast');
           $('.inputIcon > .fa-search').fadeOut('fast');
    
           var filter = $filter('filter')($scope.illerDesktop, { "il": Value.il  }, true);  
        if(filter.length > 0)
           {
            $scope.ilcelerDesktop.splice(0,$scope.ilcelerDesktop.length);
          allData.map(function(item){
            if(item.il == Value.il) 
            $scope.ilcelerDesktop.push({"ilce":item.ilce});
          });
           }
        }
        else if(!Value){
            $('.inputIcon > .fa-remove').fadeOut('fast');
            $('.inputIcon > .fa-search').fadeIn('fast');
        }   
        }); 
        
        $scope.inputChanged=function()
        {
            
            if(this.searchStr){
                $('.inputIcon > .fa-remove').fadeIn('fast');
                $('.inputIcon > .fa-search').fadeOut('fast');
         
             }
             else{
                 $('.inputIcon > .fa-remove').fadeOut('fast');
                 $('.inputIcon > .fa-search').fadeIn('fast');
             }        
        }
        
        $scope.sehirDesktopInit();
        $scope.inputTemizle=function(param)
        {
            switch (param) {
                case 'ildesktop':
                    $scope.$broadcast('angucomplete-alt:clearInput', 'ilDesktop');
                    $('.inputIcon > .fa-remove').fadeOut('fast');
                    $('.inputIcon > .fa-search').fadeIn('fast');
                    break;
            
                default:
                    break;
            }
        }    
        if($stateParams.loginModal == 1) $('.loginModal').modal('show');
    });