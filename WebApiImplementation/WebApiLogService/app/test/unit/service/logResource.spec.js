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

        console.log(result);

        expect(result).toBe(result);
    }));
});