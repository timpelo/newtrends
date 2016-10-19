var app = angular.module("TodoList", ['ngResource']);
var endpoint = "http://localhost:8080/"
var table;
var selectedListId;

$(function() {
  table = document.getElementById("todo-list-table");
});

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
    selectedListId = listId;

    var list = result2.query(function() {
      var selectedList = list[0].name;

      var root = result.query(function() {
        $scope.items = root;
        if(root.length > 0) {
          $scope.listDesc = "Items in " + selectedList;
          table.style.display="inline-block";
        } else {
          $scope.listDesc = "No items in " + selectedList;
          table.style.display = "none";
        }
      });
    });
  }

  $scope.sort = function(sortBy) {
    $scope.sortOrder = sortBy;
  }

  $scope.addList = function() {

    var newList = {};
    newList.name = $scope.modalTitle;
    newList.description = $scope.modalContent;
    console.log(newList);

    $.ajax({
      url:endpoint + "list/add",
      type:"post",
      data: JSON.stringify(newList),
      headers:{"Content-Type":"application/json"},
      dataType:"json",
      success: function(res) {
          console.log(res);

          var result = $resource(endpoint + "list");
          var root = result.query(function() {
            $scope.todoLists = root;
          });
      }
    });
  }

  $scope.addItem = function() {
    console.log(selectedListId);

    var newItem = {};
    newItem.name = $scope.itemModalTitle;
    newItem.description = $scope.itemModalContent;
    newItem.listId = selectedListId;
    console.log(newItem);
    console.log(selectedListId);

    $.ajax({
      url:endpoint + "items/add",
      type:"post",
      data: JSON.stringify(newItem),
      headers:{"Content-Type":"application/json"},
      dataType:"json",
      success: function(res) {
          console.log(res);
          $scope.updateItems(selectedListId);
      }
    });
  }
});
