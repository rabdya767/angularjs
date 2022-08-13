/// <reference path="./angular.min.js" />
/**
//creating a module
var myApp = angular.module("myModule", []);

//controller the controller 
// var myController = function ($scope){
//     $scope.message = "Angular JS tutorial";
// };

//register the controller with module
myApp.controller("myController", function ($scope) {
    var employee = {
        firstName : "Rabdya",
        lastName : "Santhosh",
        gender : "Male"
    };
    $scope.employee = employee;
    // $scope.message = "Angular JS tutorial";
});
*/

var myApp = angular
    .module("myModule", [])
    .controller("myController", function ($scope) {
        var player = {
            name : "Virat Kohli",
            sport : "Cricket",
        }
        $scope.player = player;
        // var employee = {
        //     firstName: "Rabdya",
        //     lastName: "Santhosh",
        //     gender: "Male"
        // };
        // $scope.employee = employee;
    });