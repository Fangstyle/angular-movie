/**
 * Created by Administrator on 2017/1/16.
 */
(function (angular) {
	angular.module("main_movie_search",['ngRoute']).directive('movieSearch',["$route",function ($route) {
		return {
			restrict :'AE',
			scope:{},
			template:'<form class="navbar-form navbar-right" ng-submit="search()"> <input type="text" class="form-control" placeholder="Search..." ng-model="text"> </form>',
			replace:true,
			link:function ($scope ,iElm , iAttrs ,controller) {
				$scope.text = '';
				$scope.search = function () {
					$route.updateParams({category : 'search' , q :$scope.text});
				};
			}
		}
	}])
})(angular);
