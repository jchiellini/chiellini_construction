'use strict';

angular.module('ccApp')
  .directive('dropZone', function() {
    return {
      scope:{
       options:"="
      },
      link:function(scope, element, attrs) {
        scope.files = [];
        var init = function() {
          var submitButton = document.querySelector("#submit-all"),
          myDropzone = this; // closure

          submitButton.addEventListener("click", function() {
            myDropzone.processQueue(); // Tell Dropzone to process all queued files.
          });

          scope.files.push({file: 'added'}); // here works
          this.on('success', function(file, json) {
            console.log(json)
            console.log(file);
          });

          this.on('addedfile', function(file) {
            scope.$apply(function(){
              scope.files.push({file: 'added'});
            });
          });

          this.on('drop', function(file) {
          });
        };

        var config = scope.options;
        config.url = attrs.action;
        config.init = init;
        element.dropzone(config);

      }
    }
  });