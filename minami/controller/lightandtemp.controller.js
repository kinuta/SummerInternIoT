var Q = require('q');
var mongoose = require('mongoose');
mongoose.Promise = require('q').Promise;

var model = require('model/lightandtemp.model.js'),
    lightandtemps = model.lightandtemps;

var controller = {};

controller.saveData = saveData;

module.exports = controller;

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