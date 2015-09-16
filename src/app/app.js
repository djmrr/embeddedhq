
angular.module('embeddedhq', [
  'ngRoute',
  'embeddedhq.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/embeddedhq/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});
