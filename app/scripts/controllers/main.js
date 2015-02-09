'use strict';

/*jshint sub:true*/

var app = angular.module('loginApp');

app.controller('mainCtrl', function ($scope, $http, localStorageService) {

  // Checks local storage for saved token. If exists it is displayed and disable future requests, if not just wait for valid post request and save the result.  
  var localTokens = localStorageService.get('clientToken');
  $scope.clientToken = localTokens;
  $scope.$watch('clientToken', function () {
    localStorageService.set('clientToken', $scope.clientToken);
  }, true);

  // Define a valid token
  $scope.validToken = 'e4d909c290d0fb1ca068ffaddf22cbd0';

  // Function that requests data from the server
  $scope.submitToken = function() {

  // Sets Authorization header to be SHA-1 from the valid application token
  $http.defaults.headers.common.Authorization = sha1($scope.validToken);

  // Make a post request
  $http.post('http://h139-233.rackhostvps.com/auth', {applicationToken: $scope.validToken})
      .success(function(data, status){
        $scope.postResult = data;
        $scope.clientToken = data.clientToken;
        $scope.responseMessage = 'Success: ('+status+')';
      }).error(function(data, status) {
          $scope.responseMessage = 'Error: '+data+' ('+status+')';
      });
    };

});
