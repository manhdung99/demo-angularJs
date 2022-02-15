
    var myApp = angular.module('callAPIApp', []);

    myApp.controller('callAPIDemo', callAPIDemo);

    function callAPIDemo($scope,$http) {
        $http.get('https://jsonplaceholder.typicode.com/users').then(
            function(response) {
                console.log(response);
                $scope.users = response.data;
            }
        )
    }