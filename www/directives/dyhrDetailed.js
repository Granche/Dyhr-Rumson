app.directive('dyhrDetailed', [function (argument) {
  return {
    templateUrl: '/directives/dyhrDetailed.html',
    controller: ["$scope", "Bostad", function($scope, Bostad) {
      Bostad.get(function(data){
        for(var i=0; i<data.length; i++) {
          $scope.hus = data[i];
        }
      })
    }] 
  }
}]);
