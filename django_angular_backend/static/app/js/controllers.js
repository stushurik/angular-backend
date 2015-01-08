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
);

