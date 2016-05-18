app.directive('dyhrModal', [function() {

  return {
    //templateUrl: '/directives/dyhrModal.html',
    controller: ['$scope', '$uibModal', function($scope, $uibModal) {
      


      $scope.openModal = function(bostad) {
        // create a new modal with the following settings
        var modalInstance = $uibModal.open({
          animation: true, // animate show/hide
          // use this template
          templateUrl: '/modals/myModalInstance.html',
          // use this controller (src: /modals/myModalInstance.js)
          controller: 'myModalInstance',
          // prevent dismissing by clicking on backdrop
          backdrop: 'static',
          // make our modal large
          size: 'lg',

          resolve: {
            bostad: bostad
          }

          
        });
    
        modalInstance.result.then(function (selectedOption) {
            console.log("pressed Cancel")

        }, function () {
              console.log("pressed Cancel")
          }
        );
      };

    }]
  };
}]);