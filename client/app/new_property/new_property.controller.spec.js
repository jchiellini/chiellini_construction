'use strict';

describe('Controller: NewPropertyCtrl', function () {

  // load the controller's module
  beforeEach(module('ccApp'));

  var NewPropertyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewPropertyCtrl = $controller('NewPropertyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
