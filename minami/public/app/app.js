var minamiApp = angular.module("minamiApp", ['ui.router']);

minamiApp.controller("superCtrl", function($scope,$http) {
	var vm = this;
	vm.user = {};
	vm.user.name = "";
	vm.user.email = "";

	$http({
	  method: 'GET',
	  url: '/app/token'
	}).then(function successCallback(response) {
	    console.log(response)
	  }, function errorCallback(response) {
	    console.log(response)
	  });
});