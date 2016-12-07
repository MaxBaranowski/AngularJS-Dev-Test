"use strict"

var app = angular.module('test', ['ngAnimate', 'ui.bootstrap', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/'
        })
        .state('partial', {
            url: '/partial',
            templateUrl: './template/partial.html'
        })
        .state('detail', {
            url: '/detail/:detailId'
        })
});
