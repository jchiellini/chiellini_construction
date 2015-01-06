'use strict';

describe('Controller: NewContentCtrl', function () {

  // load the controller's module
  beforeEach(module('ccApp'));

  var NewContentCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewContentCtrl = $controller('NewContentCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
