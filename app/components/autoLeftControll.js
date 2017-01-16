/**
 * Created by baocheng on 2017/1/16.
 */
(function (angular) {
	angular.module("main_leftMenu_focus",[]).directive('autoFocus',["$location",function ($location) {
		return {
			restrict :'A',
			link:function ($scope ,iElm , iAttrs ,controller) {
				$scope.$loction = $location;
				$scope.$watch('$loction.path()',function (now , old ) {
					var aLink = iElm.children().attr('href');
					var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');
					if (now.startsWith(type)){
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');
					}
				});
			}
		}
	}])
})(angular)
