'use strict';

angular.module('myApp.movieDetail', ['ngRoute','myApp.service.httpServer'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:id', {
    templateUrl: 'movieDetail/view.html',
    controller: 'movieDetailController'
  });
}])

.controller('movieDetailController', [
	'$scope',
	'$route',
	'$routeParams',
	'HttpServer',function($scope,$route,$routeParams,HttpServer) {
		$scope.title = '';
		$scope.image = '';
		$scope.description = '';
		$scope.loadFinish =false;
	    HttpServer.jsonP('https://api.douban.com/v2/movie/subject/'+$routeParams.id,{},function (data) {
		$scope.title = data.title;
		$scope.image = data.images.large;
		$scope.description =data.summary;
		$scope.loadFinish =true;
		$scope.$apply();
	});
}]);
