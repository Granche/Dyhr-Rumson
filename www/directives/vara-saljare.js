app.directive('varaSaljare', [function() {

  return {
    templateUrl: '/directives/vara-saljare.html',
    controller: ['$scope', function($scope) {
      var saljare = [{
        namn: "Taulant Salihi",
        tlf: "0737809833",
        email: "taulantsalihi@hotmail.se",
        region: "Skåne",
        pic: "../img/taulant.jpg",
        info: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        namn: "Granit Demiraj",
        tlf: "0737809730",
        email: "granitdemiraj@hotmail.se",
        region: "Stockholm",
        pic: "../img/granit.jpg",
        info: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        namn: "Vlatko Saveski",
        tlf: "0737809339",
        email: "VlatkoSaveski@hotmail.se",
        region: "Stockholm",
        pic: "../img/vlatko.jpg",
        info: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        namn: "Marko Bijelic",
        tlf: "0737809239",
        email: "MarkoBijelic@hotmail.se",
        region: "Skåne",
        pic: "../img/marko.jpg",
        info: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        namn: "Sadia Ali Sweden",
        tlf: "0737809844",
        email: "SadiaAliSweden@hotmail.se",
        region: "Skåne",
        pic: "../img/sadia.jpg",
        info: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        namn: "Sumeja Cerkezi",
        tlf: "0737809833",
        email: "SumejaCerkezi@hotmail.se",
        region: "Skåne",
        pic: "../img/sumeja.jpg",
        info: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      },
      {
        namn: "Elham Serajpoor",
        tlf: "0737809355",
        email: "ElhamSerajpoor@hotmail.se",
        region: "Stockholm",
        pic: "../img/elham.jpg",
        info: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
      }
      ]; 
      $scope.saljare=saljare;





    }] // End controller
  }
}])
