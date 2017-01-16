'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
	'ngRoute',
	'myApp.movieDetail',
	'myApp.movieList',
	'main_leftMenu_focus',
	'myApp.version'
]).config(['$routeProvider', function ($routeProvider) {
	$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]).controller('searchController',['$scope','$route',function ($scope,$route) {
	$scope.searchInput = '';
	$scope.search = function () {
		$route.updateParams({category : 'search' , q :$scope.searchInput});
	};
}]);
