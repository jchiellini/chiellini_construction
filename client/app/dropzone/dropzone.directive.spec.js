'use strict';

describe('Directive: dropzone', function () {

  // load the directive's module and view
  beforeEach(module('ccApp'));
  beforeEach(module('app/dropzone/dropzone.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dropzone></dropzone>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the dropzone directive');
  }));
});