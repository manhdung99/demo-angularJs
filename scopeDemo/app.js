

var myApp = angular.module('scopeDemo',[])



myApp.controller('myController',myController);
myApp.controller('schoolController',schoolController);


function myController($scope,$rootScope){
    $rootScope.name = 'Dung'
    $scope.sayHello = () =>{
        alert('Hello ' + $scope.name)
    }
}

function schoolController($scope,$rootScope){
    $scope.name = 'Manh DUng'
} 
