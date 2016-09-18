
var viewModule = angular.module("ViewModule", ['ngRoute']);

viewModule.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl:'view.html',
    controller:'ViewController'});

  $routeProvider.when('/edit', {
    templateUrl:'edit.html',
    controller:'EditController'});
});

viewModule.controller("ViewController", function($scope, CustomerService) {
  $scope.table = CustomerService.contacts;
});

viewModule.controller("EditController", function($scope, CustomerService) {
  $scope.table = CustomerService.contacts;

  $scope.add = function() {
    CustomerService.addContact($scope.newname, $scope.newsalary);
  };

  $scope.remove = function(name) {
    CustomerService.removeContact(name);
  };
});

viewModule.factory("CustomerService", function() {
  var factory = {};
  factory.contacts = [{name:'Jack', salary:'3500'},
    {name:'Henry', salary:'2250'},
    {name:'Susan', salary:'2500'}];

  factory.addContact =  function(name, salary) {
    factory.contacts.push({name:name, salary, salary});
  };

  factory.removeContact = function(name) {
    for(var i = 0; i < factory.contacts.length; i++) {
      if(factory.contacts[i].name === name) {
        factory.contacts.splice(i, 1);
      }
    }
  };

  return factory;
});
