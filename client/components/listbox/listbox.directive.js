'use strict';

angular.module('ccApp')
  .directive('listbox', function () {
    return {
      templateUrl: 'components/listbox/listbox.html',
      restrict: 'EA',
      scope:{
        items:"=",
        options:"="
      },
      link: function (scope, element, attrs) {

        scope.active_import = '';

        scope.remove = function(item){
          scope.items.splice(_.indexOf(scope.items,item),1);
        };

        scope.add = function(item){
          console.log(item)
          var obj = item['originalObject'];
          var value = _.isObject(obj) ? _.first(_.values(obj)) : obj;
          scope.items.push({ label: value });
        };

      }
    };
  });