'use strict';
/*jshint sub:true*/

describe('Login app ->', function () {

  // load the controller's module
  beforeEach(module('loginApp'));

  describe('Send request ->', function () {

    var scope, httpBackend;
    var postAddress = 'http://h139-233.rackhostvps.com/auth';
    var postRequest = {applicationToken: 'e4d909c290d0fb1ca068ffaddf22cbd0'};
    var postResult = {clientToken: '883ccf2adecbb228bdd5a709adeb3142cb67f524'};

    beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
      scope = $rootScope.$new();
      httpBackend = $httpBackend;

      $controller('mainCtrl', {
        $scope: scope
      });
    }));

    afterEach (function () {
     httpBackend.verifyNoOutstandingExpectation();
     httpBackend.verifyNoOutstandingRequest();
    });

    // Returns error if url or request data is wrong
    it('Should check that valid data is sent', function() {
      httpBackend.expectPOST(postAddress, postRequest, function(headers){
          return headers.Authorization === '24cacd2b74fd8557af7adfeee243ea8ee4c2487f';
      }).respond({});
      scope.submitToken();
      httpBackend.flush();
    });

    // Checks if the result is valid value
    it('Should return valid clientToken property', function() {
      httpBackend.when('POST', postAddress, postRequest).respond(postResult);
      scope.submitToken();
      httpBackend.flush();      
      expect(scope.clientToken).toBeDefined();
    });

    // Checks if result has valid length
    it('Should match specific length', function() {
      httpBackend.when('POST', postAddress, postRequest).respond(postResult);
      scope.submitToken();
      httpBackend.flush();      
      expect(scope.clientToken.length).toEqual(40);
    });

  });

});
