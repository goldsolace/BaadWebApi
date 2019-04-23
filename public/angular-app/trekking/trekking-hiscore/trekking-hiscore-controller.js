angular.module('baadwebapi').controller('TrekkingHiscoreController', TrekkingHiscoreController);
function TrekkingHiscoreController(trekkingDataFactory) {
	var vm = this;
	vm.title = 'Hiscores';
	trekkingDataFactory.trekkingHiscore().then(function (response) {
		if (response)
			vm.trekking = response.data;
	});
}