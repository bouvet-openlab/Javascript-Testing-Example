'use strict';

describe('feedbackTemplate directive', function () {
    var el;
    var feedbackText;

    beforeEach(module('app'));

    beforeEach(module('app/src/directives/feedbackTemplate.html'));

    beforeEach(inject(function ($compile, $rootScope) {
        feedbackText = '1 + 1 = 2';
        var scope = $rootScope;
        scope.feedback = feedbackText;

        el = angular.element('<feedback-template feedback="{{feedback}}" />');
        $compile(el)(scope);
        scope.$digest();
        //console.log(el[0].outerHTML);
    }));

    it('binds feedback', function () {

        expect(el.text()).toContain(feedbackText);
    });
});