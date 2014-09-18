'use strict';

describe('Calc controller', function () {
    var scope;
    var $controllerConstructor;
    var $q;
    var logResourceMock;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller, _$q_) {
        scope = $rootScope.$new();
        $controllerConstructor = $controller;
        $q = _$q_;
        logResourceMock = sinon.stub({ getAllLogEntries: function () { }, addLogEntry: function (entryString) { } });
    }));

    it('Exists - ice breaker', function() {

        // throws injection exception if not exist
        var sut = $controllerConstructor('calcCtrl', { $scope: scope, logResource: logResourceMock });
    });

    it('Should set proper default values', function() {

        var sut = $controllerConstructor('calcCtrl', { $scope: scope, logResource: logResourceMock });
        
        expect(scope.firstNumber).toBe(0);
        expect(scope.secondNumber).toBe(0);
        expect(scope.selectedOperation).toBe('');
        expect(scope.result).not.toBeDefined();
        expect(scope.operations).toEqual([{ name: '+', value: '+' }, { name: '-', value: '-' }, { name: '*', value: '*' }]);
    });

    // Should call logresource

    it('Should calculate add', function() {

        var sut = $controllerConstructor('calcCtrl', { $scope: scope, logResource: logResourceMock });

        var assertAdd = function (firstVal, secondVal) {
            scope.selectedOperation = { name: '+', value: '+' };
            scope.firstNumber = firstVal;
            scope.secondNumber = secondVal;
            scope.calculate();
            expect(scope.result).toEqual(scope.firstNumber + scope.secondNumber);
            expect(scope.feedback).toEqual(scope.firstNumber + ' ' + scope.selectedOperation.value + ' ' + scope.secondNumber + ' = ' + scope.result);
        }

        assertAdd(4, 7);
        assertAdd(-4, 7);
        assertAdd(4, -7);
        assertAdd(-4, -7);
        assertAdd(0, 3);
        assertAdd(3, 0);
        assertAdd(0, 0);
    });

    it('Should calculate substract', function () {

        var sut = $controllerConstructor('calcCtrl', { $scope: scope, logResource: logResourceMock });

        var assertAdd = function (firstVal, secondVal) {
            scope.selectedOperation = { name: '-', value: '-' };
            scope.firstNumber = firstVal;
            scope.secondNumber = secondVal;
            scope.calculate();
            expect(scope.result).toEqual(scope.firstNumber - scope.secondNumber);
            expect(scope.feedback).toEqual(scope.firstNumber + ' ' + scope.selectedOperation.value + ' ' + scope.secondNumber + ' = ' + scope.result);
        }

        assertAdd(4, 7);
        assertAdd(-4, 7);
        assertAdd(4, -7);
        assertAdd(-4, -7);
        assertAdd(0, 3);
        assertAdd(3, 0);
        assertAdd(0, 0);
    });

    it('Should calculate multiply', function () {

        var sut = $controllerConstructor('calcCtrl', { $scope: scope, logResource: logResourceMock });

        var assertAdd = function (firstVal, secondVal) {
            scope.selectedOperation = { name: '*', value: '*' };
            scope.firstNumber = firstVal;
            scope.secondNumber = secondVal;
            scope.calculate();
            expect(scope.result).toEqual(scope.firstNumber * scope.secondNumber);
            expect(scope.feedback).toEqual(scope.firstNumber + ' ' + scope.selectedOperation.value + ' ' + scope.secondNumber + ' = ' + scope.result);
        }

        assertAdd(4, 7);
        assertAdd(-4, 7);
        assertAdd(4, -7);
        assertAdd(-4, -7);
        assertAdd(0, 3);
        assertAdd(3, 0);
        assertAdd(0, 0);
    });
});