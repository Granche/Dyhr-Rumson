app.directive('dyhrSearch', ['$rootScope', '$location', function ($rootScope, $location) {
  
  return {
    templateUrl: '/directives/dyhrSearch.html',
    link: function(scope, elem, attrs) {
      // add "has-success" or "has-error" after each search

      // A function to show/hide wells
      scope.toggleDropdown = function(){
        //Hide/show wells
        //slideToggle is a jQuery method to hide/show elements
        elem.find('.dropdown-menu').slideToggle(900);
        
         //Change button text (example of using "elem")
        var btn = elem.find('.dropdown-toggle');
        btn.html(
          btn.html().indexOf('Hide') >= 0 ? 'Sök ': 'Sök '
        );
         
      };

      // depending on if we got results
      scope.highlight = function() {
        var className = scope.bostader.length > 0 ? 'has-success' : 'has-error';

        console.log(scope.bostader);

        $rootScope.bostader = scope.bostader;

        $location.path("/fastigheter");

        // find my <form>, and add the class
        elem.find('form').addClass(className);

        // a second later,
        // remove the class
        setTimeout(function() {
          // find my <form>, and remove the class
          elem.find('form').removeClass(className);
        }, 2000);
      };
    },
    controller: ['$scope', 'Bostad', function($scope, Bostad) {

      // code originally from
      // src: http://lernia.nodebite.se/sokfiltrera-bygg-mongo-queries-fran-select-input/

      // The $scope variables to watch and 
      // what they correspond to in your mongoose model
      var options = {
        townSel: {
          modelHome: "typAvBostad",
          type: String,
          operator: "$eq"
        },
        minPriceSel: {
          modelHome: "pris",
          type: Number,
          operator: "$gte"
        },

        maxPriceSel: {
          modelHome: "pris",
          type: Number,
          operator: "$lte"
        }, 
        maxRoomSel: {
          modelHome: "antalRum",
          type: Number,
          operator: "$gte"
        }
      };

      // The $scope variables to watch as an array
      var toWatch = [];
      for(var i in options){ toWatch.push(i); }

      $scope.sendQuery = function() {
        var query = {$and:[]}, partQuery, val, ops;
        // Build a mongo $and query by looping through the options
        for(var i in options){
          ops = options[i];
          // Get the value from $scope, convert numbers to numbers
          val = ops.type === Number ? $scope[i] / 1 : $scope[i];
          
          // Ignore empty and faulty values
          if(!val){ continue; }
          // if val is supposed to be a number
          // but it's not, ignore it!
          if(ops.type === Number && isNaN(val)){ continue; }

          // Build this part of the query
          partQuery = {};
          partQuery[ops.modelHome] = {};
          partQuery[ops.modelHome][ops.operator] = val;
          // Add it to the main query
          query.$and.push(partQuery);
        }
        // $and must never be an empty array
        if(query.$and.length === 0){ delete query.$and; }
        // Debug, check how the query looks
        console.log(JSON.stringify(query,'','  '));
        // Query the database through a ngResource object
        $scope.bostader = Bostad.get(query, function() {
          // run the "highlight" function from link
          // to show users if the search worked or not
          console.log($scope.bostader)
          $scope.highlight();
        });
      };

      // Watch the variables for changes
      /*$scope.$watchGroup(toWatch, function(){
        // build and send our query
        $scope.sendQuery();
      });*/

      

      // reset all form inputs
      $scope.startQuery = function() {
        $scope.sendQuery();
      };
      $scope.resetQuery = function() {
        for (var i in options) {
          $scope[i] = ''; // set ng-model to empty string (nothing)
        }
      };
    }]
  };
}]);