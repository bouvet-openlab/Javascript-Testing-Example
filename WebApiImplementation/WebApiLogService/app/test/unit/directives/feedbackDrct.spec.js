'use strict';

describe('feedback directive', function() {
	var el;
	var feedbackText;

    beforeEach(module('app'));

    beforeEach(inject(function($compile, $rootScope) {
    	feedbackText = '1 + 1 = 2';
    	var scope = $rootScope;
    	scope.feedback = feedbackText;

    	el = angular.element('<feedback feedback="{{feedback}}" />');
    	$compile(el)(scope);
        scope.$digest();
    }));

    it('binds feedback', function () {

        expect(el.text()).toContain(feedbackText);
    });
});