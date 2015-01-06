'use strict';

angular.module('ccApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_user', {
        url: '/users/new',
        templateUrl: 'app/new_user/new_user.html',
        controller: 'NewUserCtrl'
      });
  });