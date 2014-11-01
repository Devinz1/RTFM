var app = angular.module('rtfmApp'['firebase', 'ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/login', {
      templateUrl: '/scripts/controllers/login/login.html/LoginController.js',
      controller: 'LoginController'
    })
    .when('/threads', {
      templateUrl: '/scripts/threads/threads.html',
      controller: 'threadsController'	

    })
    .when('/threads/:thread:Id', {
      templateUrl: '/scripts/threads/:thread:Id/threadsId.html',
      controller: 'threadsIdController'
    })
    .otherwise({
    	redirectTo: '/login'
    });

}]);