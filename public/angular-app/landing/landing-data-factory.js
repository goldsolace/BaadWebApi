angular.module('baadwebapi').factory('landingDataFactory', landingDataFactory);
function landingDataFactory($http) {
    return{
        landing: landing,
    };
    function landing() {
        return  $http.get('api/landing').then(complete).catch(failed);
    }
    function complete(response) {
        return response;
    }
    function failed(error) {
        console.log(error.statusText); 
    }

}