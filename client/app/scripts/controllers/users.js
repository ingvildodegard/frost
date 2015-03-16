'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('frostApp').
	controller('UsersCtrl', function ($scope, $http) {
    	$http.get("/api/users").success(function(response) {
    		$scope.users = response;
    		$scope.users.forEach(function(user) {
    			user.start = Date.parse(user.start);
    			user.end = Date.parse(user.end);
    			user.created_at = Date.parse(user.created_at);
    		}
    		);
    	});
    });

