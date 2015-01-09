'use strict';

var URL_PREFIX = "static/app/";

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

        $routeProvider.when('/',
            {templateUrl: URL_PREFIX + 'partials/about_me.html', controller: 'IndexController'});
        $routeProvider.when('/contacts',
            {templateUrl: URL_PREFIX + 'partials/contacts.html', controller: 'ContactsController', reloadOnSearch: true});

        $routeProvider.otherwise({redirectTo: '/'});

    }]
);