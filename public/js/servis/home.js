

    
    main.factory('Data', function Data($http) {

        return{
            get: function get(url) {

                 return $http.get(url);
                 },
        }
    });
    main.controller('home' ,function(Data,$scope)
{
    $scope.illerDesktop=[];
    var appUrl = angular.element('#main').scope().appUrl;
    
    $scope.secIlDesktop = function (il) {
        
        if (!angular.isUndefined(il)) {
            $scope.il = il.originalObject;
        }
    }
    $scope.sehirDesktopInit = function ()
    {
       Data.get(appUrl + 'ilveilce.json').success(function (response) {
        var data = [...new Set(response.map(item => item.il))]; 
        data.map((item)=>{
            return $scope.illerDesktop.push({"il":item});
        })
        console.log($scope.illerDesktop )
      
   });
    }
    
    $scope.sehirDesktopInit();
});