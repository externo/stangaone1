(function () {

  'use strict';

  angular.module('app')
    .config([
      '$locationProvider',
      '$routeProvider',
      function ($locationProvider, $routeProvider) {
        $routeProvider.when('/home', {
          templateUrl: 'views/home.html'
        });
        $routeProvider.when('/list', {
          templateUrl: 'views/list.html',
          controller: 'ListController as List'
        });
        $routeProvider.when('/account', {
          templateUrl: 'views/account.html',
          controller: 'AccountController as Account'
        });
        $routeProvider.otherwise({redirectTo: '/home'});
      }
    ]);

}());
