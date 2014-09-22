'use strict';

app.directive('feedbackTemplate', function () {
    return {
        scope: {
            feedback: '@'
        },
        restrict: 'E',
        templateUrl: 'app/src/directives/feedbackTemplate.html'
    };
});