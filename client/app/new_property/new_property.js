'use strict';

angular.module('ccApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_property', {
        url: '/manage/property/:id',
        templateUrl: 'app/new_property/new_property.html',
        controller: 'NewPropertyCtrl'
      });
  });