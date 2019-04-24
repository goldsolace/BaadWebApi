angular.module('baadwebapi').factory('herbloreDataFactory', herbloreDataFactory);
function herbloreDataFactory($http) {
    return{
        herbloreHiscore: herbloreHiscore,
        herbloreUser: herbloreUser,
    };
    function herbloreHiscore() {
        return  $http.get('api/herblore').then(complete).catch(failed);
    }
    function herbloreUser(id){
        return $http.get('api/herblore/' + id).then(complete).catch(failed);
    }
    function complete(response) {
        return response;
    }
    function failed(error) {
        console.log(error.statusText); 
    }

}