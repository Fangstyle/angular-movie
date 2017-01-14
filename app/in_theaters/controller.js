'use strict';

angular.module('myApp.in_theaters', ['ngRoute','myApp.service.httpServer'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/in_theaters', {
    templateUrl: 'in_theaters/view.html',
    controller: 'theaterController'
  });
}])

.controller('theaterController', [
	'$scope',
	'$route',
	'$routeParams',
	'HttpServer',function($scope,$route,$routeParams,HttpServer) {
	HttpServer.jsonP('https://api.douban.com/v2/movie/in_theaters',{count:2},function (data) {
		$scope.subjects =data.subjects;
		$scope.$apply();
	})
}]);
