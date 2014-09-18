'use strict';

app.factory('logResource', ['$resource', function($resource) {
    var logEntryResource = $resource('http://localhost:9000/service/calculationlog');

    return {
        getAllLogEntries: function() {
            return logEntryResource.query();
        },
        addLogEntry: function(entryString) {
            var logEntry = { logEntry: entryString };
            return logEntryResource.save(logEntry);
        }
    }
}])