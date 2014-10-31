var app = angular.module('rtfmApp'['firebase', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/login/threads/threads/:threadId',
      controller: 'mainCntl'
    });
}]);