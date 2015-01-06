'use strict';

angular.module('ccApp')
  .controller('NewPropertyCtrl', function ($scope,$stateParams,cache,Modal) {

    $scope.isNew = function(){
      return _.isEmpty($stateParams.id);
    };

    $scope.active_property = {
      street:'',
      city:'',
      tags:''
    };

    $scope.Init = function(){
      if(!_.isEmpty($stateParams.id)){
        $scope.active_property = cache.LookupProperty($stateParams.id);
        console.log($scope.active_property)
      }
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

    $scope.Delete = function(){
      var deleteModal = Modal.confirm.delete(function(){console.log("Return of the Calamari Crusader!")});
      deleteModal($scope.active_property.street);
    }

  });
