'use strict';

angular.module('ccApp')
  .service('cache', function (toaster,$location) {

    var cache = {};

    cache.properties = [
      {
        id:1,
        label: "34 Wittich Avenue",
        number:34,
        street:"Wittich Avenue",
        city:"Rivervale",
        state:"NJ",
        tags:[
          {
            label:'front'
          },
          {
            label:'side'
          }
        ]
      },
      {
        id:2,
        label: "213 Mountain Avenue",
        number:213,
        street:"Mountain Avenue",
        city:"Park Ridge",
        state:"NJ",
        tags:[
          {
            label:'front'
          }
        ]
      }
    ];

    cache.content = [
      {
        id:1,
        property:"Wittich Avenue",
        caption:"Tis a lovely house",
        image:'house.jpg',
        tags:[
          {
            label:'front'
          }
        ]
      },
      {
        id:2,
        property:"Mountain Avenue",
        caption:"Tis a lovely house",
        image:'house.jpg',
        tags:[
          {
            label:'side'
          }
        ]
      },
      {
        id:3,
        property:"Wittich Avenue",
        caption:"Side yard",
        image:'house.jpg',
        tags:[
          {
            label:'side'
          }
        ]
      }
    ];

    cache.tags = [
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

    cache.toast = function(title,message,type){
      if(_.isUndefined(type)){
        type = 'success';
      }

      toaster.pop(type, title, message);
    };

    cache.GoToPage = function(url){
     $location.path(url);
    };

    cache.LookupProperty = function(id){
      console.log(cache.properties)
       return _.findWhere(cache.properties,function(property){ return property.id == id });
    };

    cache.LookupContent= function(id){
      return _.findWhere(cache.content,function(image){ return image.id == id });
    };

    return cache;

  });
