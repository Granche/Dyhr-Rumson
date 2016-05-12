app.directive('allProperties', [function() {

  return {
    templateUrl: '/directives/allProperties.html',
    controller: ['$scope',"Bostad", function($scope, Bostad) {
      Bostad.get(function(data){
        $scope.bostader = data;
        
      })
    }]
  }
}])