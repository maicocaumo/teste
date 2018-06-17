(function () {
	'use strict';

	// register the route config on the application
	angular
		.module('ftiApp.main', ['ui.router'])
		.config(configMainRoute);

	// inject configMainRoute dependencies
	configMainRoute.$inject = ['$stateProvider'];

	// route config function configuring the passed $stateProvider
	function configMainRoute($stateProvider) {
		var mainState = {
			name: 'main',
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'vm'
		};

		$stateProvider.state(mainState);
	}

})();
