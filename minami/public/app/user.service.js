minamiApp.factory('userService', Service);

function Service($http) {
    var service = {};

    service.getUser = getUser;

    return service;

    function getUser() {
      console.log("getUser이 발동하는타이밍");
        return $http.get('/api/user/getuser').then(handleSuccess, handleError);
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