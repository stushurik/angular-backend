'use strict';


// Declare app level module which depends on filters, and services
angular.module('ngTest', [
  'ngRoute',
  'ngResource',
  'ngTest.filters',
  'ngTest.services',
  'ngTest.directives',
  'ngTest.controllers'
]).
config(

    ['$routeProvider',
    function($routeProvider) {

    }]
);