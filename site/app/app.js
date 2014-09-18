'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.config([
    '$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'templates/start.html'
            })
            .when('/Log', {
                templateUrl: 'templates/log.html',
                controller: 'logCtrl'
            })
            .when('/Calc', {
                templateUrl: 'templates/calc.html',
                controller: 'calcCtrl'
            });
    }
]);