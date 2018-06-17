/**
 * @ngdoc controller
 * @name ftiApp.controller:AppController
 * @description
 * This is the application wide controller of the ftiApp application
 */

(function () {
	'use strict';

	// register the controller as AppController
	angular
		.module('ftiApp')
		.controller('AppController', AppController);

	/**
	 * @ngdoc function
	 * @name ftiApp.provider:AppController
	 * @description
	 * Provider of the {@link ftiApp.controller:AppController AppController}
	 *
	 * @param {$location} $mdSidenav - The sidenav service used to communicate with the sidenav components
	 */

	// AppController.$inject = [];

	function AppController() {}
})();
