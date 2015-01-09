'use strict';

/* Controllers */

angular.module('ngTest.controllers', ['ngRoute'])
.run().controller(

    "IndexController",
    ['$scope',
        function ($scope){

            $scope.firstName = "Olexandr";
            $scope.lastName = "Poplavskyi";

            var bd = new Date;
            bd.setFullYear(1992);
            bd.setMonth(5);
            bd.setDate(19);
            $scope.dob = bd;

            $scope.bio = 'student, 22 years, web-dev';
            $scope.contacts = ['+380972507835'];


        }]
).controller(

    "ContactsController",
    ['$scope', '$routeParams', '$location', 'Contact',
        function ($scope, $routeParams, $location, Contact){

            $scope.add = function(a,b){
                return a + b;
            };

            $scope.sub = function(a,b){
                return a - b;
            };

            $scope.search = function(operator){

                $location.search({limit: $scope.limit, offset: operator($scope.offset, $scope.limit)})

            };

            $scope.contacts = [];
            $scope.error = false;

            $scope.limit = $routeParams.hasOwnProperty('limit') ? $routeParams.limit : 5;
            $scope.offset = $routeParams.hasOwnProperty('offset') ? $routeParams.offset : 0;

            Contact.get({limit: $scope.limit, offset: $scope.offset}, function (response) {
                $scope.contacts = response.objects;
                $scope.meta = response.meta;
            }, function (response) {
                $scope.error = true;
            });

        }]
);

