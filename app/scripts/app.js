'use strict';

/**
 * @ngdoc overview
 * @name angularBluemixSeedApp
 * @description
 * # angularBluemixSeedApp
 *
 * Main module of the application.
 */
angular
    .module('angularBluemixSeedApp', [
        'ngResource',
        'ngRoute'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/howto', {
                templateUrl: 'views/howto.html',
                controller: 'HowToCtrl',
                controllerAs: 'howto'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
