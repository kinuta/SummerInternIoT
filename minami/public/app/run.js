minamiApp.run(run);

function run($http, $rootScope, $window) {
	console.log("run")
	$.get('/app/token', function(token) {  
		window.jwtToken = token;
		$http.defaults.headers.common['Authorization'] = 'Bearer ' + $window.jwtToken;
		console.log("헤더저장완료타이밍")
	});


    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
		if(!window.jwtToken) {
			console.log("トークンがないよ！") 
			$window.location = '/login';
		}
    });
}