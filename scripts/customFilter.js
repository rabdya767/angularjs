/// <reference path="./angular.min.js" />
var myApp = angular
    .module("myModule", [])
    // .filter("role", function () {
    //     return function (role) {
    //         switch (role) {
    //             case 1:
    //                 return "Software Developer";
    //             case 2:
    //                 return "Software Engineer";
    //             case 3:
    //                 return "Manager";
    //             case 4:
    //                 return "Director";
    //             case 5:
    //                 return "Team Lead"
    //         }
    //     }
    // })
    .controller("myCtrlr", function ($scope) {
        var employees = [
            { name: "virat", dob: new Date("November 23, 1980"), role: 1, salary: 68872.988, city: "Mumbai" },
            { name: "mirza", dob: new Date("June 02,1989"), role: 2, salary: 57012.342, city: "Hyderabad" },
            { name: "rohith", dob: new Date("July 07,1983"), role: 5, salary: 59587.231, city: "Mumbai" },
            { name: "saina", dob: new Date("December 12,1976"), role: 3, salary: 72538.983, city: "Chennai" },
            { name: "dhoni", dob: new Date("March 15,1978"), role: 4, salary: 65412.942, city: "Delhi" },
            { name: "kaur", dob: new Date("April 19,1967"), role: 2, salary: 60849.456, city: "Hyderabad" }
        ]
        $scope.employees = employees;

    });