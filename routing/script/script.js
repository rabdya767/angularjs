/// <reference path="./angular.min.js" />
/// <reference path="./angular-route.min.js" />

var myApp = angular.module("myModule",["ngRoute"])
                    .config(function($routeProvider,$locationProvider){
                        $routeProvider
                            .when("/home",{
                                templateUrl : "templates/home.html",
                                controller : "homeController as hc"
                            })
                            .when("/concepts",{                                
                                templateUrl : "templates/concepts.html",
                                controller : "conceptsController  as cc"
                            })
                            .when("/stats",{                                
                                templateUrl : "templates/stats.html",
                                controller : "statsController  as sc"
                            })
                            .when("/stats/:website",{                                
                                templateUrl : "templates/statsDetails.html",
                                controller : "statsDetailsController",
                                controllerAs : "sdc"
                                // controller : "statsDetailsController  as sdc"
                            })
                            .otherwise({
                                redirectTo : "/home"
                            })
                            $locationProvider.html5Mode(true);
                        })
                    .controller("homeController", function(){
                        this.message = "Home Page";
                    })
                    .controller("conceptsController", function(){
                        this.concepts = ["directives","scope object","ng-repeat","angular ui & bootstrap","routing","services"];
                    })
                    .controller("statsController", function(){
                        this.websites = ["upwork.com","angular.io","mxtoolbox.com","cricbuzz.com","leetcode.com","webflow.com"];
                    })
                    .controller("statsDetailsController", function($scope , $routeParams){
                        $scope.websites = ["upwork.com","angular.io","mxtoolbox.com","cricbuzz.com","leetcode.com","webflow.com"].forEach((x)=>{
                            x = "https://www."+$routeParams.website+"/";
                        })
                        console.log($scope.websites);
                    })
                    .controller("testController",function(){
                        this.message = "Hello Angular JS!";
                    })
                    .controller("countryController", function(){
                        this.message = "India";
                    })
                    .controller("stateController", function(){
                        this.message = "Telangana";
                    })
                    .controller("cityController", function(){
                        this.message = "Hyderabad";
                    })