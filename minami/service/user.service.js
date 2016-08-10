var config = require('config.json');
var jwt = require('jsonwebtoken');
var Q = require('q');

var usersModel = require('model/user.model.js'),
    users = usersModel.users;

var service = {};

service.authenticate = authenticate;
service.create = create;
service.getuser = getuser;
service.addwanaedison = addwanaedison;
service.getbriefwanasdata = getbriefwanasdata;

module.exports = service;

function getbriefwanasdata(email){
    var deferred = Q.defer();
    users.findOne({ email : email }, function (err, user) {
        if (err) {
            console.log("error")
            deferred.reject(err);
        }else{
            //console.log("getbriefwanasdata find user success wanaEdison data is below")
            // find user successful
            //console.dir(user.wanaEdison)
            deferred.resolve(user.wanaEdison);            
        }
    });
    return deferred.promise;
}

function addwanaedison(email, newEdison) {

    var deferred = Q.defer();

    users.findOne({ email : email }, function (err, user) {
        if (err) {
            console.log("error")
            deferred.reject(err);
        }

        if (user) {
            console.log("find user success")
            // find user success
            user.wanaEdison.push(newEdison)
            user.save(function (err, doc) {
                if (err) {
                    deferred.reject(err);
                } else {
                    console.dir("wana업데이트 성공했고 그 결과는 .. (user.wanaEdison) : " + user.wanaEdison)
                    deferred.resolve();
                }
            });
        } else {
            console.log("find user failed")
            // find user failed
            deferred.reject(err);
        }
    });

    return deferred.promise;
}

function authenticate(email, password) {

    var deferred = Q.defer();

    users.findOne({ email : email }, function (err, user) {
        if (err) {
            console.log("error")
            deferred.reject(err);
        }

        if (user) {
            console.log("success")
            // authentication successful
            deferred.resolve(jwt.sign({ email : email }, config.secret));
        } else {
            console.log("authentication failed")
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();

    // validation
    users.findOne(
        { email: userParam.email },
        function (err, user) {
            if (err) deferred.reject(err);

            if (user) {
                // email already exists
                deferred.reject('email "' + userParam.email + '" is already taken');
            } else {
                createUser();
            }
        });

    function createUser() {
        // set user object to userParam without the cleartext password
        var user = new users(userParam);

        user.save(function (err, doc) {
                if (err) deferred.reject(err);
                deferred.resolve();
            });
    }

    return deferred.promise;
}

function getuser(email){
    var deferred = Q.defer();
    users.findOne({ email : email }, function (err, user) {
        if (err) {
            console.log("error")
            deferred.reject(err);
        }else{
            console.log("success")
            // find user successful
            //console.dir(user._doc)
            deferred.resolve({
                firstName : user._doc.firstName,
                lastName : user._doc.lastName,
                email : user._doc.email,
            });            
        }
    });
    return deferred.promise;
}