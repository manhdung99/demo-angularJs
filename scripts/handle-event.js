

var myApp = angular.module('handleModule',[])

myApp.controller('handleController',handleController)

function handleController($scope){
    let technologies = [
        {Name: "C#" ,Likes:0,Dislikes:0},
        {Name: "ASP.NET" ,Likes:0,Dislikes:0},
        {Name: "SQL Server" ,Likes:0,Dislikes:0},
        {Name: "AngularJS" ,Likes:0,Dislikes:0}
    ];

    $scope.technologies = technologies;

    $scope.increaseLike = (technology) =>{
        technology.Likes++;
    }
    $scope.increaseDislike = (technology) =>{
        technology.Dislikes++;
    }

}