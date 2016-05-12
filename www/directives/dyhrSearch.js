app.directive('dyhrSearch', [function () {

  return {
    templateUrl: '/directives/dyhrSearch.html',
    controller: ['$scope',"Bostad", function($scope, Bostad) {
      Bostad.get(function(data) {
        var stader = ["Malmö"];
        data.forEach(function(innerdata) {

        })
      })     
    }]
  };
}]);