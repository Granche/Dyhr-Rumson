app.directive('dyhrFyra', [function () {
  
  return {
    templateUrl: '/directives/dyhrFyra.html',
    link: function(scope, elem, attrs) {
    	console.log(elem.find(".dateInputField").length)
    	elem.find(".dateInputField").datepicker({
    		dateFormat: "yy-mm-dd"
    	});
    },
    controller: ["$scope", function($scope) {
    	$scope.submitForm = function() {
    		console.log("$scope.selectedDate:", $scope.selectedDate);
    	};
    }]
  };
}]);