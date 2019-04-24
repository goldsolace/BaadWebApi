angular.module('baadwebapi').controller('LandingController', LandingController);
function LandingController(landingDataFactory) {
	var vm = this;
	vm.title = 'Baad Scripts';
	landingDataFactory.landing().then(function (response) {
		if (response)
			vm.landing = response.data;
	});
}