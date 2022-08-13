/// <reference path="./angular.min.js" />
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        // $scope.message  = "Hello World!";
        var employee = {
            firstName: "Rabdya",
            lastName: "Santhosh",
            gender: "Male"
        };
        $scope.employee = employee;
    });
//ng-model can be used with input , select and textarea