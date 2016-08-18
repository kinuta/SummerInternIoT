minamiApp.controller("wanaController", Controller);

function Controller(wanaService,userService,toastr,$scope,$http,$window,_,$state,$rootScope,NgMap,$timeout) {
	var wanaCtrl = this;
	console.log("state is ",$state.current.name)

	NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });

	wanaCtrl.update = function (){
		console.log("wanaCtrl.update!")

		userService.getBriefWanasData()
		.then(function(briefWanasData) {
			console.log("getBriefWanasData Done. in wanaCtrl.update")
			console.dir(briefWanasData)
			wanaCtrl.briefWanasData = briefWanasData;

			if($state.current.name == "index.wana"){
				$timeout(wanaCtrl.update,1000)
			}

		});
	}

	wanaCtrl.update();

	wanaCtrl.getDetailData = function(edisonCode){
		console.log(edisonCode)
		wanaService.getDetailData(edisonCode)
		.then(function(detailData) {
			wanaCtrl.detailData = detailData;
            
			if(detailData.pop().isConnected == false){
				toastr.error("作動しました!", 'Activated!');
			}else{
				toastr.error("正常です!", 'Not Activated Yet!');
			}
			$state.go('index.wana.detail');
		});
	}
}