/**
 * @ngdoc controller
 * @name ftiApp.main.controller:MainController
 * @description
 * Controls mainly nothing currently
 */

(function () {
	'use strict';

	// register the controller as MainController
	angular
		.module('ftiApp.main')
		.controller('MainController', MainController);

	/**
	 * @ngdoc function
	 * @name ftiApp.main.provider:MainController
	 * @description
	 * Provider of the {@link ftiApp.main.controller:MainController MainController}
	 *
	 * @param {Service} $scope The scope service to use
	 * @param {Service} $http The http service to use
	 */

	// MainController.$inject = [];

	function MainController() {}

})();
