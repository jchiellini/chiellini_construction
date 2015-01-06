'use strict';

angular.module('ccApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('new_content', {
        url: '/manage/content/:id',
        templateUrl: 'app/new_content/new_content.html',
        controller: 'NewContentCtrl'
      });
  });