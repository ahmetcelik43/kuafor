
    var main = angular.module('main', ['angucomplete-alt'], function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    })
    .config(function ($locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false,
            rewriteLinks:false        
        });
    });;
main.controller('main' ,function($scope)
{
   $scope.appUrl = 'http://localhost:8000/';
   $scope.message = 'İletişim';
});