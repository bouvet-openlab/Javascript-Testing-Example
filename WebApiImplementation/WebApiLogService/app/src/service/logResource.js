'use strict';

app.factory('logResource', ['$resource', function($resource) {
    var logEntryResource = $resource('/service/calculationlog');

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