'use strict';

angular.module('ccApp')
  .controller('ResultsCtrl', function ($scope,cache,$location) {
    $scope.cache = cache;
    $scope.query = '';

      $scope.Init = function(){
      var search = $location.search();
      $scope.query = search.query;
      $scope.PerformSearch($scope.query);
    };

    $scope.search = function(query){
      var query = query['originalObject'];
      if(_.isObject(query)){
        query = query.label;
      }
      $scope.PerformSearch(query)
    };

    $scope.PerformSearch = function(query){
       console.log("Searched: '"+query+"'");
    };

  });
