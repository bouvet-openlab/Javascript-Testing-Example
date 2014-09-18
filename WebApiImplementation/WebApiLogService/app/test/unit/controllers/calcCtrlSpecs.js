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

    it('Should set proper default values', function() {

        var sut = $controllerConstructor('calcCtrl', { $scope: scope, logResource: logResourceMock });
        
        expect(scope.firstNumber).toBe(0);
        expect(scope.secondNumber).toBe(0);
        expect(scope.selectedOperation).toBe('');
        expect(scope.result).not.toBeDefined();
        expect(scope.operations).toEqual([{ name: '+', value: '+' }, { name: '-', value: '-' }, { name: '*', value: '*' }]);
    });
});