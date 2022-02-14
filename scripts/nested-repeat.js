var myApp = angular.module('nestedRepeatModule',[]) 

myApp.controller('nestedRepeatController',nestedRepeatController);

function nestedRepeatController($scope){
    let countries = [
        {
            name: 'UK',
            cities : [
                {name:'London'},
                {name:'BirmingHam'},
                {name:'Manchester'},
            ]
        },
        {
            name: 'USA',
            cities : [
                {name:'Los Angeles'},
                {name:'Chicago'},
                {name:'Houston'},
            ]
        },
        {
            name: 'India',
            cities : [
                {name:'Hyderabad'},
                {name:'Chennai'},
                {name:'Mumbai'},
            ]
        },
    ];
    $scope.countries =countries;
}