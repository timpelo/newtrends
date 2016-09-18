
var myModule = angular.module("MyModule", []);

myModule.controller("BmiController", function($scope) {

  $scope.calcBmi = function() {
    var bmi = $scope.weight/($scope.height*$scope.height);
    $scope.result = bmi;
  };
});
