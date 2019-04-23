var app = angular.module('baadwebapi');
app.filter('capitalize', function() {
	return function(input) {
		if (!input) return '';
		var result = input.replace( /([A-Z])/g, " $1" );
		var finalResult = result.charAt(0).toUpperCase() + result.slice(1);
		return result.charAt(0).toUpperCase() + result.slice(1);
	};
});