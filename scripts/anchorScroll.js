/// <reference path="./angular.min.js" />

var myApp = angular
    .module("myModule", [])
    .controller("myCtrlr", function ($scope, $location, $anchorScroll) {
        $scope.scrollTo = function (scrollLocation) {
            $location.hash(scrollLocation);
            $anchorScroll().yOffset = 20;
        }
    });
