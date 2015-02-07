'use strict';
/*jshint sub:true*/

describe('Login app ->', function () {

  // load the controller's module
  beforeEach(module('loginApp'));

  describe('mainCtrl', function () {

    var scope, httpBackend;

    beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
      scope = $rootScope.$new();
      httpBackend = $httpBackend;

      $controller('mainCtrl', {
        $scope: scope
      });

      httpBackend
        .when('POST', 'http://h139-233.rackhostvps.com/auth', {applicationToken: 'e4d909c290d0fb1ca068ffaddf22cbd0'})
        .respond({clientToken:'883ccf2adecbb228bdd5a709adeb3142cb67f524'});

      scope.submitToken();
      httpBackend.flush();
    }));

    afterEach (function () {
     httpBackend.verifyNoOutstandingExpectation();
     httpBackend.verifyNoOutstandingRequest();
    });

    it('should have 1 token', function () {
      expect(scope.clientToken).toBe('883ccf2adecbb228bdd5a709adeb3142cb67f524');
    });

    it('should be array', function() {
      expect(scope.clientToken).toContain('709');
    });
  });

});
