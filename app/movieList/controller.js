'use strict';

angular.module('myApp.movieList', ['ngRoute','myApp.service.httpServer'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:category/:page?', {
    templateUrl: 'movieList/view.html',
    controller: 'movieListController'
  });
}])

.controller('movieListController', [
	'$scope',
	'$route',
	'$routeParams',
	'HttpServer',function($scope,$route,$routeParams,HttpServer) {
	HttpServer.jsonP('https://api.douban.com/v2/movie/'+$routeParams.category,{count:2},function (data) {
		$scope.subjects =data.subjects;
		$scope.$apply();
	})
}]);
