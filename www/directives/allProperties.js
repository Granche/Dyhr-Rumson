app.directive('allProperties', [function() {

  return {
    templateUrl: '/directives/allProperties.html',
    controller: ['$scope',"Bostad", function($scope, Bostad) {
      Bostad.get(function(data){
        if(data.length<=0) {
          Bostad.create(bostader)
        }
        $scope.bostader = data;
      });

      $scope.getAll = function(){
        Bostad.get(function(data) {
          $scope.bostader = data;
        })   
      };

      $scope.getAppartments = function(){
        Bostad.get({typAvBostad: "Bostadsrättslägenhet"}, function(data) {
          $scope.bostader = data;
        })   
      };

      $scope.getHouses = function(){
        Bostad.get({"typAvBostad": "Villa"}, function(data) {
          $scope.bostader = data;
        })   
      };



    }] // End controller
  }
}])
