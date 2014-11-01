var app = angular.module('rtfmApp').controller('loginController', function($scope, EnvironmentService) {

 EnvironmentService.getEnv().then(function(response){
 	$scope.env = response.data;
 })

});

