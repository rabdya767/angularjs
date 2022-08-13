/// <reference path="./angular.min.js" />
var myApp = angular
    .module("myModule", [])
    .controller("myCtrlr", function ($scope) {
        var employees = [
            { name: "virat", dob: new Date("November 23, 1980"), gender: "Male", salary: 68872.988, city: "Mumbai" },
            { name: "mirza", dob: new Date("June 02,1989"), gender: "Female", salary: 57012.342, city: "Hyderabad" },
            { name: "rohith", dob: new Date("July 07,1983"), gender: "Male", salary: 59587.231, city: "Mumbai" },
            { name: "saina", dob: new Date("December 12,1976"), gender: "Female", salary: 72538.983, city: "Chennai" },
            { name: "dhoni", dob: new Date("March 15,1978"), gender: "Male", salary: 65412.942, city: "Delhi" },
            { name: "kaur", dob: new Date("April 19,1967"), gender: "Female", salary: 60849.456, city: "Hyderabad" }
        ]
        $scope.employees = employees;

        $scope.search = function (item) {
            if ($scope.searchText == undefined ||
                item.name.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.city.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }
        }
        return false;
    });