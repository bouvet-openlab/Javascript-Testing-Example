'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config([
    '$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/src/templates/start.html'
            })
            .when('/Log', {
                templateUrl: 'app/src/templates/log.html',
                controller: 'logCtrl'
            })
            .when('/Calc', {
                templateUrl: 'app/src/templates/calc.html',
                controller: 'calcCtrl'
            });
    }
]);