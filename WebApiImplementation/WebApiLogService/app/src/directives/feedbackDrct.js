'use strict';

app.directive('feedback', function () {
    return {
        scope: {
            feedback: '@'
        },
        replace: true,
        restrict: 'E',
        template: '<div class="well thumbnail span12">' +
                      '<b>feedback directive</b><br/>'+
                      '{{feedback}}' +
                  '</div>'
    };
});