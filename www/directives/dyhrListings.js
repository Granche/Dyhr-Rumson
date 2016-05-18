app.directive('dyhrListings', [function () {

  return {
    templateUrl: '/directives/dyhrListings.html',
    controller: ['$scope',"Bostad", function($scope, Bostad) {
      Bostad.get(function(data) {
        data.forEach(function(data) {
        if(data.info.length > 120) {
          
          var str = data.info.split("");
          str.splice(120,str.length)
          str = str.join("")
          str = str+"[...]";
          data.info = str;
        }
      })
          $scope.bostader = data;        
      })
    }]
  };
}]);