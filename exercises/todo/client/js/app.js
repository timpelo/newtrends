var app = angular.module("TodoList", ['ngResource']);
var endpoint = "http://localhost:8080/"

app.controller("ListController", function($scope, $resource) {
  $scope.listDesc = "Select a list";
  $scope.selectedList = "";
  var result = $resource(endpoint + "list");
  var root = result.query(function() {
    $scope.todoLists = root;
  });

  $scope.updateItems = function(listId) {
    var result = $resource(endpoint + "items/" + listId);
    var result2 = $resource(endpoint + "list/" + listId);

    var list = result2.query(function() {
      var selectedList = list[0].name;

      var root = result.query(function() {
        $scope.items = root;
        if(root.length > 0) {
          $scope.listDesc = "Items in " + selectedList;
        } else {
          $scope.listDesc = "No items in " + selectedList;
        }
      });
    });
  }
});
