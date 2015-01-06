'use strict';

angular.module('ccApp')
  .controller('NewContentCtrl', function ($scope,$http,$stateParams,cache,Modal) {

    $scope.cache = cache;
    $scope.isNew = function(){
      return _.isEmpty($stateParams.id);
    };

    $scope.dropzoneConfig = {
      uploadMultiple:false,
      autoProcessQueue: false,
      addRemoveLinks: true,
      parallelUploads: 3,
      maxFileSize: 30,
      maxFiles:1
    };

    $scope.active_content = {
      property:'',
      caption:'',
      tags:''
    };

    $scope.Init = function(){
      if(!_.isEmpty($stateParams.id)){
        $scope.active_content = cache.LookupContent($stateParams.id);
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

    $http.get('/api/images').success(function(images) {
      $scope.images = images;
    });

    $scope.Delete = function(){
      var deleteModal = Modal.confirm.delete(function(){console.log("Return of the Calamari Crusader!")});
      deleteModal('this image');
    }

  });
