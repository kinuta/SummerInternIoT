var Q = require('q');
var model = require('model/wana.model.js'),
    wanas = model.wanas;

var service = {};

service.saveData = saveData;

module.exports = service;

function saveData(data){
	var deferred = Q.defer();

	var lightandtemp = new wanas(data);

	lightandtemp.save(function(err, doc){
		if (err) {
			deferred.reject(err);
		}
		else{
			deferred.resolve();
		}
	})

	return deferred.promise;
}