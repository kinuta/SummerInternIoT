minamiApp.factory('wanaService', Service);

function Service($http) {
    var service = {};

    service.getDetailData = getDetailData;

    return service;

    function getDetailData(edisonCode) {
        return $http.post('/api/wana/getdetaildata',{edisonCode:edisonCode}).then(handleSuccess, handleError);
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