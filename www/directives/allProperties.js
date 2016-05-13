app.directive('allProperties', [function() {

  return {
    templateUrl: '/directives/allProperties.html',
    controller: ['$scope',"Bostad", function($scope, Bostad) {
      Bostad.get(function(data){
        if(data.length<=0) {
          Bostad.create(bostader)
        }
        $scope.bostader = data;
        
      })
    }]
  }
}])
