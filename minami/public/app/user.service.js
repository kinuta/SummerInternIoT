minamiApp.factory('userService', Service);

function Service($http) {
    var service = {};

    service.getUser = getUser;
    service.addWanaEdison = addWanaEdison;
    service.getBriefWanasData = getBriefWanasData;
    
    return service;

    function getUser() {
      console.log("getUser이 발동하는타이밍");
        return $http.get('/api/user/getuser').then(handleSuccess, handleError);
    }

    function addWanaEdison(newEdison) {
      console.log("addWanaEdison 발동하는타이밍");
        return $http.post('/api/user/addwanaedison',newEdison).then(handleSuccess, handleError);
    }

    function getBriefWanasData() {
        return $http.get('/api/user/getbriefwanasdata').then(handleSuccess, handleError);
    }

    function handleSuccess(res) {
        console.log("handleSuccess")
        console.log(res.data)
        return res.data;
    }

    function handleError(res) {
        console.log("handleError")
        console.log(res.data)
        return res.data;
    }
}