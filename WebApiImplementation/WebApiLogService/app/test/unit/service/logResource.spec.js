'use strict';

describe('Log resource service', function() {
    var $httpBackend;

    beforeEach(module('app'));

    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('Should retrieve log entries from GET request to /service/calculationlog', inject(function(logResource) {

        var fakeResponse = [{ logEntry: 'entry1' }, { logEntry: 'entry2' }];

        $httpBackend.when('GET', '/service/calculationlog').respond(fakeResponse);
        var result = logResource.getAllLogEntries();

        $httpBackend.flush();

        expect(result).toBe(result);
    }));

    it('Should POST logEntry to /service/calculationlog on addLogEntry', inject(function(logResource) {
        var logEntry = { logEntry: "entry" };

        $httpBackend.when('POST', '/service/calculationlog').respond(logEntry);

        var result = logResource.addLogEntry(logEntry);

        $httpBackend.flush();

        expect(result).toMatch(logEntry);
    }))
});