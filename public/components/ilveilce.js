
main.component('sehir', {
    templateUrl:  '/newTemplate/ilveilce.html',    
    bindings: {
        page: '@',
        model:'=',
        model2:'='
    }, 
    controller: function($attrs,Data, $scope,$filter) {
        $scope.$on("$destroy",function() {    
            $( window ).off( "resize.Viewport" );
         });
     if($attrs.page == "home" ){ $('.form-doldur').css('display','none');
     $('.sehir2 , .ilce2').css('display','inline-block'); 
     $('.profil').css("display","none");
    }
      if($attrs.page == 'kuaforFormDoldur' ) { $('.form-doldur').css('display','block');
      $('.sehir2 , .ilce2').css('display','none');
      $('.profil').css("display","none");
    }
      if($attrs.page == 'profil' ) { $('.profil').css('display','block');$('.sehir2 , .ilce2').css('display','none');
      $('.form-doldur').css('display','none');
     }

      var allData=[];
    $scope.illerDesktop=[];
    $scope.ilcelerDesktop=[];
 
    console.log(this)
    //$scope.appUrl = angular.element('#main').scope().appUrl;
    $scope.secIlDesktop = function (il) {
        
        if (!angular.isUndefined(il)) 
        $scope.il  = il.originalObject;
        
    }
  
    $scope.secIlceDesktop = function (ilce) {
        
        if (!angular.isUndefined(ilce)) 
            $scope.ilce = ilce.originalObject;
        
    }
    $scope.sehirDesktopInit = function ()
    {
        //authFactory.putCache("ahmet");
       Data.get('/ilveilce.json').then(function (response) {
       // response.header("Access-Control-Allow-Origin", "*");
       allData= response.data;

       //authFactory.putCache(JSON.stringify(response.data));
        var data = [...new Set(response.data.map(item => item.il))]; 
        data.map((item)=>{
            return $scope.illerDesktop.push({"il":item });
        });
   });


    }
 
   $scope.$watch('il',function(Value){
    
       if(Value){

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
   
    }); 
    
   
    
    $scope.sehirDesktopInit();
    /*
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
    }    */
    }
  });