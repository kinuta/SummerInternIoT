minamiApp.controller("wanaAddController", Controller);

function Controller(wanaService,userService,toastr,$scope,$http,$window,_,$state) {
	var wanaAddCtrl = this;

	wanaAddCtrl.newEdison = {};
	wanaAddCtrl.newEdison.edisonName = "new Edison";
	wanaAddCtrl.newEdison.edisonCode = "new Edison's code";
	wanaAddCtrl.newEdison.location = {};

	wanaAddCtrl.startmap = function(){

	    console.log("startmap activated")

	    wanaAddCtrl.map = new GMaps({
	        div: "#map",
	        center : { lat : 33.7452228, lng : 134.55861819999998 },//南ラボをdefaultにした
	        zoom: 19,
	        mapTypeId: google.maps.MapTypeId.HYBRID,
	        scrollwheel: false,
	        click: function(e) {
				wanaAddCtrl.map.removeMarkers();
				wanaAddCtrl.map.addMarker({
					lat: e.latLng.lat(),
					lng: e.latLng.lng(),
					infoWindow: {
						content: "<p style='color: #0f0f0f'>"+wanaAddCtrl.newEdison.edisonName+"</p>"
					}
				})
				wanaAddCtrl.newEdison.location.lat = e.latLng.lat();
				wanaAddCtrl.newEdison.location.lng = e.latLng.lng();
			}
	    });

	}

	wanaAddCtrl.moveToCurrentLocation = function(){
		GMaps.geolocate({
			  success: function(position) {
			  	console.log("moveToCurrentLocation success your location is ("+position.coords.latitude+','+position.coords.longitude+')')
			    wanaAddCtrl.map.setCenter(position.coords.latitude,position.coords.longitude);
			  },
			  error: function(error) {
			    alert('Geolocation failed: '+error.message);
			  },
			  not_supported: function() {
			    alert("Your browser does not support geolocation");
			  },
			  always: function() {
			    console.log("Done!");
			  }
		});
    }

    wanaAddCtrl.add = function(){
    	if(wanaAddCtrl.newEdison.location.lat == undefined){
    		console.dir(wanaAddCtrl.newEdison.location)
    		toastr.error("位置設定が間違っています", 'ERROR!');
    	}else{
	    	console.log("wanaAddCtrl.add")
			userService.addWanaEdison(wanaAddCtrl.newEdison)
			.then(function(message) {
				console.log(message);
				
				//$scope.wanasBriefDataUpdate();
				$scope.wanaCtrl.update();//これで上のコードと等価
				//console.dir($scope.wanaCtrl.update())//try
				$state.go('^')
			});   
    	} 	
    }

}