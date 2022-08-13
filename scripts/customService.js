/// <reference path="./angular.min.js" />
var myApp = angular
    .module("myModule", [])
    .controller("myCtrlr", function ($scope,stringService) {
        $scope.transformString = function (input) {
            $scope.output = stringService.processString(input);
        }
    });