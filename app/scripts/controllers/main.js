'use strict';

/*jshint sub:true*/

angular.module('loginApp')
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common['Authorization'] = '24cacd2b74fd8557af7adfeee243ea8ee4c2487f';
  }])
  .controller('mainCtrl', function ($scope, $http, localStorageService) {

    var localTokens = localStorageService.get('clientToken');

    $scope.clientToken = localTokens;

    $scope.$watch('clientToken', function () {
      localStorageService.set('clientToken', $scope.clientToken);
    }, true);

    $scope.validToken = 'e4d909c290d0fb1ca068ffaddf22cbd0';

    $scope.submitToken = function() {
    $http.post('http://h139-233.rackhostvps.com/auth', {applicationToken: $scope.validToken}).success(function(data, status){
      $scope.clientToken = data.clientToken;
      $scope.responseMessage = 'Success: ('+status+')';
    }).error(function(data, status) {
        $scope.responseMessage = 'Error: '+data+' ('+status+')';
      });
    };

  });
