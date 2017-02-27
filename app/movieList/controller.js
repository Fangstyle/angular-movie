'use strict';

angular.module('myApp.movieList', ['ngRoute','myApp.service.httpServer'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:category/:page', {
    templateUrl: 'movieList/view.html',
    controller: 'movieListController'
  });
}])

.controller('movieListController', [
	'$scope',
	'$route',
	'$routeParams',
	'HttpServer',function($scope,$route,$routeParams,HttpServer) {
		var count = 10; // 每一页的条数
		var page = parseInt($routeParams.page); // 当前第几页
		console.log(page);
		var start = (page - 1) * count; // 当前页从哪开始
		$scope.subjects = [];
		$scope.leftStyle = $routeParams.category;
		$scope.loadFinish =false;
		$scope.currentPage = page;
		$scope.totalPage = 0;
		$scope.pages=0;
	    HttpServer.jsonP('https://api.douban.com/v2/movie/'+$routeParams.category,{count:count, start: start ,q:$routeParams.q},function (data) {
		$scope.subjects =data.subjects;
		$scope.totalPage = data.total;
		$scope.start =data.start;
		$scope.pages=Math.ceil($scope.totalPage/count);
		$scope.loadFinish =true;
		$scope.$apply();

	});
		$scope.ToPage = function (page) {
			if (page >= 1 && page <= $scope.totalPage)
				$route.updateParams({ page: page });
				console.log(page);
		};
		$scope.toDetail = function (id) {

		}
}]);
