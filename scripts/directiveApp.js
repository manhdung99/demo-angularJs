
var myApp = angular.module('demoDirective',[])

myApp.controller('myController',myController).directive("welcomeText",welcomeText)

function welcomeText (){
    // var html = "<h1> Hello World </h1>"
    return {
        templateUrl : "/angular_demo/loginForm.html"
        
    }
}
function myController($scope){
    
 }