angular.module('baadwebapi').controller('HerbloreUserController', HerbloreUserController);

function HerbloreUserController($route, $routeParams, herbloreDataFactory) {
    var vm = this;
    var id = $routeParams.id;
    vm.isSubmitted = false;
    herbloreDataFactory.herbloreUser(id).then(function (response) {
        if (response) {
            vm.herbloreUser = response.data;
            if (response.data.rewards)
            	vm.rewardLength = Object.keys(response.data.rewards).length;
            else vm.rewardLength = 0;
        }
    });
}