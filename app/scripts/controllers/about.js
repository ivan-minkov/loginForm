'use strict';

/**
 * @ngdoc function
 * @name loginFormApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the loginFormApp
 */
angular.module('loginFormApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
