app.directive('allProperties', [function() {

  return {
    templateUrl: '/directives/allProperties.html',
    controller: ['$scope',"Bostad", function($scope, Bostad) {
      Bostad.get(function(data){
        if(data.length<=0) {
          Bostad.create(bostader)
        }

        console.log(data);
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

      $scope.sortera = function(arr,propName){
        arr.sort(function(a,b){
          return a[propName] > b[propName] ? 1 : -1;
        });

      }



    }] 
  }
}])
