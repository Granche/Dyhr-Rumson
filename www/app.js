// declare our angular app
// and it's dependencies
var app = angular.module("dyhrOchRuhmson", [
  'ngRoute',
  'ngResource',
  'ngTouch',
  'ui.bootstrap'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '/templates/hem.html'
	})
	.when('/om-oss', {
		templateUrl: '/templates/om-oss.html'
	})
	.when('/fastigheter', {
		templateUrl: '/templates/fastigheter.html'
	})
	.when('/kontakt', {
		templateUrl: '/templates/kontakt.html'
	})
	.otherwise('/', {
		templateUrl: '/templates/404.html'
	})

	// use real urls
	$locationProvider.html5Mode(true);
}]);