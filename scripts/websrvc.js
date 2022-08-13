/// <reference path="./angular.min.js" />
var myApp = angular
    .module("myModule", [])
    .controller("myCtrlr", function ($scope, $http, $log) {
        $http.get('https://api.github.com/users')
            // $http({
            //     method: "GET",
            //     url: "https://api.github.com/users"})
            .then(function (response) {
                $scope.users = response.data;
                $log.info(response);
                $log.info(response.data);
            }).catch(function (reject) {
                $log.info(reject);
                console.log("Error is " + (reject.data.message));
                console.log("Visit  " + (reject.data.documentation_url));
            });

        // $scope.users = $http.get('https://api.github.com/users')
        //                     .then(function (response) {
        //                         $scope.users = response.data;
        //                     }).catch(function (reject) {
        //                         console.log("Error is " + (reject.data.message));
        //                         console.log("Visit  " + (reject.data.documentation_url));
        //                     });

    });