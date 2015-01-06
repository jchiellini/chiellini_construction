'use strict';

angular.module('ccApp')
  .controller('ManageCtrl', function ($scope,cache) {

    $scope.cache = cache;

    $scope.Init = function(){
      $scope.selected_property = cache.properties[0];
    };

    $scope.SelectProperty = function(property){
      $scope.selected_property = property;
    };

    $scope.tags = [
      {
        label:'front'
      },
      {
        label:'back'
      },
      {
        label:'side'
      }
    ];

  });
