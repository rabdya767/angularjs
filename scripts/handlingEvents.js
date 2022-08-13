/// <reference path="./angular.min.js" />
var myApp = angular
    .module("myModule", [])
    .controller("myCtrlr", function ($scope) {
        var technologies = [
            { name: "C#", likes: 0, dislikes: 0 },
            { name: "JAVA", likes: 0, dislikes: 0 },
            { name: "PYTHON", likes: 0, dislikes: 0 },
            { name: "C++", likes: 0, dislikes: 0 },
            { name: "NODE JS", likes: 0, dislikes: 0 },
            { name: "TYPESCRIPT", likes: 0, dislikes: 0 }
        ]

        var likescount = 0;
        var dislikescount = 0;
        $scope.title = "handling Events"
        $scope.technologies = technologies;

        $scope.incrementLikes = function (technology) {
            likescount += 1;
            technology.likes++;
        }

        $scope.decrementLikes = function (technology) {
            dislikescount += 1;
            technology.dislikes++;
        }

        $scope.reset = function (likescount, dislikescount) {
            likescount = 0;
            dislikescount = 0;
        };
        $scope.likescount = likescount;
        $scope.dislikescount = dislikescount;
    });