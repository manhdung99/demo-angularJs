    
    
    var myApp = angular.module('includeApp', []);

    myApp.controller('includeDemo', includeDemo);


    function includeDemo($scope) {
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
        $scope.employees = employees;
        $scope.employeeView = './tableEmployee.html';
    }
    myApp.filter('status', function () {
        return function (input) {
            if (input == true)
                return 'Complete';
            else
                return 'Incomplete';
        }
    });