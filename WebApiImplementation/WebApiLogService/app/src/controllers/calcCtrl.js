'use strict';

app.controller('calcCtrl', [
    '$scope', 'logResource', function ($scope, logResource) {
        $scope.operations = [{ name: '+', value: '+' }, { name: '-', value: '-' }, { name: '*', value: '*' }];

        $scope.result = undefined;
        $scope.firstNumber = 0;
        $scope.secondNumber = 0;
        $scope.selectedOperation = '';

        $scope.calculate = function () {

            if ($scope.selectedOperation.value == '+') {
                $scope.result = $scope.firstNumber + $scope.secondNumber;
            }
            if ($scope.selectedOperation.value == '-') {
                $scope.result = $scope.firstNumber - $scope.secondNumber;
            }
            if ($scope.selectedOperation.value == '*') {
                $scope.result = $scope.firstNumber * $scope.secondNumber;
            }

            $scope.feedback = $scope.firstNumber + ' ' + $scope.selectedOperation.value + ' ' + $scope.secondNumber + ' = ' + $scope.result;

            logResource.addLogEntry($scope.feedback);
        }
    }
]);