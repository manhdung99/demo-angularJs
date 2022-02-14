// Create module

var myApp = angular.module('myModule',[]);

// Create controller
myApp.controller('myController',($scope)=>{
        let employee = {
            FirstName : "Nguyen",
            LastName : "Manh Dung",
            Gender : "Male"
        }
        $scope.employee = employee;
})