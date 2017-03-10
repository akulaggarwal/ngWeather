const myApp = angular.module('app', ['ngRoute', 'ngResource']);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/reporting', {
        templateUrl: 'pages/weather.html',
        controller: 'weatherController'
    })
})
    
myApp.service('cityService', function() {
    this.cityName = '';
})

myApp.controller('mainController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.someContent = 'This be Main page.';
//    $scope.userEntry = '';
    $scope.$watch('userEntry', function() {
        console.log($scope.userEntry);
    })
    
    $scope.userSubmits = function() {
        console.log($scope.userEntry);
        cityService.cityName = $scope.userEntry;
    }
    
}])

myApp.controller('weatherController', ['$scope', 'cityService', function($scope, cityService) {
    $scope.cityName = cityService.cityName;
}])
