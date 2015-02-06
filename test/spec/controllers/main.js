'use strict';
/*jshint sub:true*/

describe('with httpBackend', function() {

beforeEach(module('loginApp'));

 var loginCtrl, scope;

 // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      loginCtrl = $controller('loginCtrl', {
      $scope: scope
    });

    // $httpBackend.when('GET', 'https://api.github.com/users/jasonmore').respond({things: 'and stuff'});
    // $httpBackend.flush();
  }));

it('should get login success',
  inject(function(LoginService, $httpBackend) {

    $httpBackend.expect('POST', 'https://api.mydomain.com/login').respond({ success : true });

    LoginService.login('test@test.com', 'password')
      .then(function(data) {
        expect(data.success).toBeTruthy();
        // expect(1).toBe(1);
    });

  $httpBackend.flush();
}));
});