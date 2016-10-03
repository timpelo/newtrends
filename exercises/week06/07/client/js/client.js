var module = angular.module("MyApp", ['ngResource']);

module.controller('ContactController', function($scope, $resource) {
    var endpoint = "http://localhost:3000/employees";
    var result = $resource(endpoint);
    var root = result.query(function() {
      $scope.contacts = root;
    });
});
