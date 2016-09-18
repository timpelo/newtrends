
var viewModule = angular.module("ViewModule", ['ngRoute']);

viewModule.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl:'view.html',
    controller:'ViewController'});

  $routeProvider.when('/edit', {
    templateUrl:'edit.html',
    controller:'EditController'});
});

viewModule.controller("ViewController", function($scope) {
  var table = [];
  table.push({name:'Jack', salary:'3500', gender:'male'});
  table.push({name:'Henry', salary:'2250', gender:'male'});
  table.push({name:'Susan', salary:'2500', gender:'female'});

  $scope.table = table;
});

viewModule.controller("EditController", function($scope) {
  var table = [];
  table.push({name:'Jack', salary:'3500', gender:'male'});
  table.push({name:'Henry', salary:'2250', gender:'male'});
  table.push({name:'Susan', salary:'2500', gender:'female'});

  $scope.table = table;
});
