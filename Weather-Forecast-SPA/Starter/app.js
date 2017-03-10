const myApp = angular.module('app', ['ngRoute', 'ngResource']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
})
    
myApp.controller('mainController', ['$scope', function($scope) {
    $scope.someContent = 'This be Main page.';
    $scope.userEntry = '';
    $scope.$watch('userEntry', function() {
        console.log($scope.userEntry);
    })
    
    $scope.userSubmits = function() {
                                    console.log($scope.userEntry);
                                    }
    
}])
