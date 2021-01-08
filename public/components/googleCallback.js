main.controller('googleCallback' ,function($scope,authFactory,$location,$window,$stateParams,$state)
{
  
$scope.name=$stateParams.name;
$scope.email=$location.search().email;
$scope.doRegister = function()
{
    var registerData = {
        name:$scope.name,
        email:$scope.email,
        sifre:$scope.sifre,
        rol:$scope.rol
    }
    authFactory.doRegister(registerData).then(function()
    {
        $window.location.href ="/refererVar";
        
    }).catch(function (error) {
alert("HATA");
    });;
}
});