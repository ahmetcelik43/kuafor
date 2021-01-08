main.controller('ilanlar', function($scope){

    $scope.$on("$destroy",function() {
        $( window ).off( "resize.Viewport" );
     });    
$scope.message =   "merhaba ilanlar";
});