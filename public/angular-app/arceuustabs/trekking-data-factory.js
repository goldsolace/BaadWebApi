angular.module('baadwebapi').factory('trekkingDataFactory', trekkingDataFactory);
function trekkingDataFactory($http) {
    return{
        trekkingHiscore: trekkingHiscore,
        trekUser: trekUser,
    };
    function trekkingHiscore() {
        return  $http.get('api/trekking').then(complete).catch(failed);
    }
    function trekUser(id){
        return $http.get('api/trekking/' + id).then(complete).catch(failed);
    }
    function complete(response) {
        return response;
    }
    function failed(error) {
        console.log(error.statusText); 
    }

}