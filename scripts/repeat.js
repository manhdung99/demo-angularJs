

var myApp = angular.module('repeatModule',[]) 

myApp.controller('repeatController',repeatController);

function repeatController($scope){
    let employees = [
        {firstName:"Ben",lastName:'Hasting',gender:'Male',salary:55000},
        {firstName:"Sara",lastName:'Hasting',gender:'Male',salary:55000},
        {firstName:"Mark",lastName:'Hasting',gender:'Male',salary:55000},
        {firstName:"Pam",lastName:'Hasting',gender:'Male',salary:55000},
        {firstName:"Todd",lastName:'Hasting',gender:'Male',salary:55000}
    ];
    $scope.employees =employees;
}