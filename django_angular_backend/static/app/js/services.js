'use strict';

/* Services */

var app = angular.module('ngTest.services', ['ngResource']);

app.factory(

    'Contact',
    ['$resource',
    function($resource){

        return $resource('api/v1/contact', {}, {
          get: {
              method:'GET',
              params:{}

          }
        });
    }]

);