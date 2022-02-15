    
    
    var myApp = angular.module('sortWhenClick', []);

    myApp.controller('sortWhenClick', sortWhenClick);


    function sortWhenClick($scope) {
        var employees = [
            { name: 'Hải', birthDate: '12/3/1989', salary: 15000000, gender: 'Male', status:true},
            { name: 'Hoàng', birthDate: '6/15/1990', salary: 12000000, gender: 'Male', status: true },
            { name: 'Long', birthDate: '1/14/1992', salary: 17000000, gender: 'Male', status: false },
            { name: 'Trung', birthDate: '12/3/1993', salary: 12000000, gender: 'Male', status: true },
            { name: 'Hương', birthDate: '12/3/1995', salary: 11000000, gender: 'Female', status: false },
            { name: 'Thủy', birthDate: '12/3/1988', salary: 10000000, gender: 'Female', status: true },
            { name: 'Vân', birthDate: '12/3/1993', salary: 12000000, gender: 'Female', status: true },
            { name: 'Dũng', birthDate: '12/3/1995', salary: 11000000, gender: 'Male', status: false },
            { name: 'Anh', birthDate: '12/3/1988', salary: 10000000, gender: 'Male', status: true }
        ];
        $scope.limitRow = 3;
        $scope.employees = employees;
        $scope.sortColumn = 'name';
        $scope.reverse = true;
        $scope.searchText = '';
        $scope.hideSalary = false;
        $scope.hideName = false;
        $scope.hideBirthDate = false;
        $scope.hideGender = false;
        $scope.hideStatus = false;
    
    $scope.sortData = function (column) {
        if ($scope.sortColumn == column){
            $scope.reverse = !$scope.reverse;
        }
        else{
            $scope.reverse = false;
            $scope.sortColumn = column;
        }
    }
    $scope.getSortClass = function (column) {
        if ($scope.sortColumn == column) {
            return $scope.reverse ? 'arrow-up' : 'arrow-down';
        }
        return '';
    }
    myApp.filter('status', function () {
        return function (input) {
            if (input == true)
                return 'Complete';
            else
                return 'Incomplete';
        }
    });

}