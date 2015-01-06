'use strict';

angular.module('ccApp')
  .controller('NewUserCtrl', function ($scope, Auth, $location, cache) {

    $scope.register = function(form) {
      $scope.submitted = true;

      var user = {
        name: $scope.user.name,
        email: $scope.user.email,
        password: $scope.user.password
      };

      if($scope.user.admin){
        user.role = 'admin';
      }

      if(form.$valid) {
        Auth.createUser(user,false)
          .then( function() {
            // Account created, redirect to home
            $location.path('/users');
            cache.toast("Successfully added user",$scope.user.name);
          })
          .catch( function(err) {
            err = err.data;
            $scope.errors = {};

            // Update validity of form fields that match the mongoose errors
            angular.forEach(err.errors, function(error, field) {
              form[field].$setValidity('mongoose', false);
              $scope.errors[field] = error.message;
            });
          });
      }
    };
  });
