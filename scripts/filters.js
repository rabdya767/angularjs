/// <reference path="./angular.min.js" />
//module.filtername  filterInput
myApp.filter("role", function () {
    return function (role) {
        switch (role) {
            case 1:
                return "Software Developer";
            case 2:
                return "Software Engineer";
            case 3:
                return "Manager";
            case 4:
                return "Director";
            case 5:
                return "Team Lead"
        }
    }
})
