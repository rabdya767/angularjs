/// <reference path="./angular.min.js" />
var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var employees = [
            { firstName: "Rabdya", lastName: "Santhosh", gender: "Male", cgpa: 9.42 },
            { firstName: "Ravi", lastName: "Kumar", gender: "Male", cgpa: 8.23 },
            { firstName: "Raani", lastName: "Sai", gender: "Feale", cgpa: 7.02 },
            { firstName: "Raju", lastName: "Reddy", gender: "Male", cgpa: 8.30 }
        ];

        var college = [
            { branch: "CSE", code: "III", year: 1987, hod: "Shyamala" },
            { branch: "CIVIL", code: "V", year: 1995, hod: "Nirmala" },
            { branch: "MECH", code: "I", year: 1983, hod: "Sundar" },
            { branch: "ECE", code: "II", year: 1965, hod: "Thirupathi" },
            { branch: "EEE", code: "IV", year: 1981, hod: "Sathish" }
        ]

        $scope.employees = employees;
        $scope.college = college;
    });