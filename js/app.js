angular.module('todoListApp', [])
  .controller('mainCtrl', function ($scope) { /*method chaining starts this line*/
    $scope.helloWorld = function () {
      console.log("Hello there, this is controller func in mainCtrl");
    };
   }); /* creates app */

angular.module('todoListApp'); /* creates module */


