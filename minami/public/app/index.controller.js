minamiApp.controller("indexController", ['userService', Controller]);


function Controller(userService,$scope,$http,$window) {
	var vm = this;

	vm.init = function (){
		console.log("init")
		userService.getUser()
		.then(function(user) {
			console.log("getUser Done.")
			vm.user = user;
			console.dir(vm.user)
		});
	}

	vm.init();
}