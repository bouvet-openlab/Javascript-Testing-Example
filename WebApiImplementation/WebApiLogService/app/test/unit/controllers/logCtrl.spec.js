'use strict';

describe('Log controller', function () {
    var scope;
    var $controllerConstructor;
    var $q;
    var logResourceMock;

    beforeEach(module('app'));

    beforeEach(inject(function($rootScope, $controller, _$q_) {
        $controllerConstructor = $controller;
        $q = _$q_;
        scope = $rootScope.$new();
        logResourceMock = sinon.stub({ getAllLogEntries: function () { } });
    }));

    it('Exists - ice breaker', function () {

        // throws injection exception if not exist
        var sut = $controllerConstructor('logCtrl', { $scope: scope, logResource: logResourceMock });
    });

    it('Should bind logEntries to logResource.getAllLogEntries', function () {
        var entries = [{ logEntry: "Test" }, { logEntry: "result" }];

        //var deferred = $q.defer();
        //var promise = deferred.promise;
        //promise.then(function() {
        //    return entries;
        //});

        logResourceMock.getAllLogEntries = function() { return entries; };

        var sut = $controllerConstructor('logCtrl', { $scope: scope, logResource: logResourceMock });

        //expect(scope.logEntries).toBeUndefined();

        //deferred.resolve(entries);

        //console.log(scope.logEntries);
        expect(scope.logEntries).not.toBeUndefined();
    }); 
})