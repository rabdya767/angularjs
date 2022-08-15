/// <reference path="./angular.min.js" />
/// <reference path="./angular-route.min.js" />

var myApp = angular.module("demo",[])
                    .controller("testController",function(){
                        this.name = "Hello Angular JS!";
                    })
                    .controller("countryController", function(){
                        this.name = "India";
                    })
                    .controller("stateController", function(){
                        this.name = "Telangana";
                    })
                    .controller("cityController", function(){
                        this.name = "Hyderabad";
                    })