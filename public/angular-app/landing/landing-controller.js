angular.module('baadwebapi').controller('LandingController', LandingController);
function LandingController(landingDataFactory) {
	var vm = this;
	vm.title = 'Baad Scripts';
	vm.landing = {
		test : "test"
	};
// 	landingDataFactory.landing().then(function (response) {
// 		if (response)
// 			vm.landing = response.data;
// 	});
}