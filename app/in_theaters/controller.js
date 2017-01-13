'use strict';

angular.module('myApp.in_theaters', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/in_theaters', {
    templateUrl: 'in_theaters/view.html',
    controller: 'theaterController'
  });
}])

.controller('theaterController', [function() {

}]);
