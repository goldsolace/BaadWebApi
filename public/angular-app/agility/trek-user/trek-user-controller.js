angular.module('baadwebapi').controller('TrekUserController', TrekUserController);

function TrekUserController($route, $routeParams, trekkingDataFactory) {
    var vm = this;
    var id = $routeParams.id;
    vm.isSubmitted = false;
    trekkingDataFactory.trekUser(id).then(function (response) {
        if (response) {
            vm.trekUser = response.data;
            if (response.data.rewards)
            	vm.rewardLength = Object.keys(response.data.rewards).length;
            else vm.rewardLength = 0;
        }
    });
}