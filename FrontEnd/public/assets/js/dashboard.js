angular
  .module("userProfile", ["ngMaterial", "ngMessages"])
  .controller("Ctrl", function ($scope) {
    $scope.viewMode = true;

    // Switch between view mode and edit mode
    $scope.switchMode = function () {
      return ($scope.viewMode = !$scope.viewMode);
    };

    // Save the changes
    $scope.saveChanges = function () {
      /*Validate the input
      Save the changes*/
    };

    // User data
    $scope.user = {
      name: "Naveen",
      visionid: "VI1234",
      name: "Naveen",
      collegename: "CEG",
      rollnumber: "12345678",
      branch: "ECE",
      Phone: "404-555-1212",
      year: "4",
      programme:"UG",
      email: "naveen@gmail.com",
    };
  });
