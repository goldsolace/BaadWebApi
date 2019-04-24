angular.module('baadwebapi').controller('HerbloreHiscoreController', HerbloreHiscoreController);
function HerbloreHiscoreController(herbloreDataFactory) {
	var vm = this;
	vm.title = 'Hiscores';
	herbloreDataFactory.herbloreHiscore().then(function (response) {
		if (response)
			vm.herblore = response.data;
	});
}