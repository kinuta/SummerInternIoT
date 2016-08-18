minamiApp.controller("indexController", Controller);

function Controller(userService,toastr,$scope,$http,$window,$rootScope) {
	var indexCtrl = this;

	indexCtrl.init = function (){
		console.log("init")
		userService.getUser()
		.then(function(user) {
			console.log("getUser Done.")
			indexCtrl.user = user;
			console.dir(indexCtrl.user)
			toastr.success(indexCtrl.user.firstName+indexCtrl.user.lastName+"さん!", '歓迎します!');
		});
	}

	indexCtrl.init();

}