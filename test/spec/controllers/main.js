'use strict';

describe('Controller: mainCtrl', function () {

  // load the controller's module
  beforeEach(module('loginApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('mainCtrl', {
      $scope: scope
    });
  }));

  it('should be the first test', function () {

  });

});
