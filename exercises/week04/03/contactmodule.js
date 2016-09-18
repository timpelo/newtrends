var myModule = angular.module("MyModule", []);

myModule.controller("MyController", function($scope) {
  var currentId = 1;

  function Person(id, name, email, phone) {
    var person = {id:id, name:name, email:email, phone:phone};
    return person;
  }

  var contacts = [];
  var customer = {id:1, name:'Jack', email:"hello@there.com", phone:"123456"};
  contacts.push(customer);
  $scope.contacts = contacts;

  $scope.addNew = function() {
    currentId++;
    contacts.push(new Person(currentId, $scope.newname, $scope.newemail, $scope.newphone));
    $scope.newname = "";
    $scope.newemail = "";
    $scope.newphone = "";
  };

  $scope.remove = function(customerId) {
    for(var i = 0; i < contacts.length; i++) {
      if(contacts[i].id === customerId) {
        contacts.splice(i, 1);
      }
    }
  };
});
