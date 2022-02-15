var myApp = angular.module("customServiceApp", []);

myApp.controller("customServiceDemo", customServiceDemo);


function customServiceDemo($scope, convertString) {
  $scope.transformString = function (input) {
    $scope.output = convertString.convertString(input);
  };
}
