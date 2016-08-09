minamiApp.controller("addController", Controller);

function Controller(userService,toastr,$scope,$http,$window,_,$state) {
	var addCtrl = this;

	addCtrl.edisonName = "new Edison";
	addCtrl.edisoncode = "new Edison's code";

	addCtrl.startmap = function(){

	    console.log("startmap activated")

	    addCtrl.map = new GMaps({
	        div: "#map",
	        center : { lat : 33.7452228, lng : 134.55861819999998 },//南ラボをdefaultにした
	        zoom: 19,
	        mapTypeId: google.maps.MapTypeId.HYBRID,
	        scrollwheel: false,
	        click: function(e) {
				addCtrl.map.removeMarkers();
				addCtrl.map.addMarker({
					lat: e.latLng.lat(),
					lng: e.latLng.lng(),
					infoWindow: {
						content: "<p style='color: #0f0f0f'>"+addCtrl.name+"</p>"
					}
				})
			}
	    });

	}

	addCtrl.moveToCurrentLocation = function(){
		GMaps.geolocate({
			  success: function(position) {
			  	console.log("moveToCurrentLocation success your location is ("+position.coords.latitude+','+position.coords.longitude+')')
			    addCtrl.map.setCenter(position.coords.latitude,position.coords.longitude);
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

    addCtrl.add = function(){
    	console.log("ADD!")
    	$state.go('^')
    }

}