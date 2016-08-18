var Q = require('q');
var async = require('async');
var _ = require('underscore');
var model = require('model/wana.model.js'),
    wanas = model.wanas;

var service = {};

service.saveData = saveData;
service.getdetaildata = getdetaildata;
service.iswanaconnected = iswanaconnected;

module.exports = service;

function iswanaconnected(edisonCode){
	var deferred = Q.defer();

	wanas.findOne({ edisonCode : edisonCode }).sort('-Date').exec(function(err, data) {
	    if (err) {
	        deferred.reject(err);
	    }else{
	    	console.log("iswanaconnected 결과")
	    	console.dir(data._doc)
	        deferred.resolve(data._doc.isConnected); 
	    }
	});


	// find({'edisonCode': edisonCode}, {'comments':{'$slice':-1},_id:0,users:0,lastValue:0,name:0}, function(err, data) {
	//     if (err) {
	//         deferred.reject(err);
	//     }else{
	//     	console.log("iswanaconnected 결과")
	//     	console.dir(data._doc)
	//         deferred.resolve(data._doc.isConnected); 
	//     }
	// });

	return deferred.promise;	
}

function getdetaildata(edisonCode){
	var deferred = Q.defer();

	wanas.find({ edisonCode : edisonCode }, function (err, datas) {
        if (err) {
            console.log("error")
            deferred.reject(err);
        }else{
            console.log("success")
            // find datas successful
            //console.dir(datas)
            deferred.resolve(datas);            
        }
    });

	return deferred.promise;
}

function saveData(data){
	var deferred = Q.defer();

	var wana = new wanas(data);

	wana.save(function(err, doc){
		if (err) {
			deferred.reject(err);
		}
		else{
			deferred.resolve();
		}
	})

	return deferred.promise;
}