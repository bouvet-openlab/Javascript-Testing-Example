'use strict';

app.controller('logCtrl', [
    '$scope', 'logResource', function ($scope, logResource) {
        $scope.logEntries = logResource.getAllLogEntries();
    }
]);