var Q = require('q');
var model = require('model/lightandtemp.model.js'),
    lightandtemps = model.lightandtemps;

var service = {};

service.saveData = saveData;

module.exports = service;

function saveData(data){
	var deferred = Q.defer();

	var lightandtemp = new lightandtemps(data);

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