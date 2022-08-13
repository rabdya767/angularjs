/// <reference path="./angular.min.js" />
var myApp = angular
    .module("myModule", [])
    .controller("myCtrlr", function ($scope) {
        var employees = [
            { name: "Virat",  dob: new Date("November 23, 1980"), gender: "Male",salary : 68872.988},
            { name: "Mirza",  dob: new Date("June 02,1989"), gender: "Female",salary : 57012.342},
            { name: "Rohith", dob: new Date("July 07,1983"), gender: "Male",salary : 59587.231},
            { name: "Saina", dob: new Date("December 12,1976"), gender: "Female",salary :72538.983 },
            { name: "Dhoni",  dob: new Date("March 15,1978"), gender: "Male",salary : 65412.942},
            { name: "Kaur",  dob: new Date("April 19,1967"), gender:"Female" ,salary : 60849.456}
        ]
        $scope.employees = employees;
        $scope.rowLimit=5;
        $scope.sortColumn="name";
    });