/**
 * Created by Maxim on 03/12/2015.
 */
export class RouteController {
  constructor ($stateParams, $log, PlaceService, RouteService, SaveData) {
    'ngInject';

    this.placeService = PlaceService;
    this.routeService = RouteService;
    this.saveData = SaveData;

    //this.from = "Torenblokstraat+15";
    //this.to = "Pater+Damiaanstraat+51";
    this.from = "Edegem";
    this.to = "Geel";

    this.start = {lat: '', lng: ''};
    this.finish = {lat: '', lng: ''};

    this.instructions = [];

    this.routeStyles = [
      {name: "Blinde Kaart", image: "assets/images/blindekaart.jpg"},
      {name: "Bolletje-Pijltje", image: "assets/images/bolletjepijltje.jpg"},
      {name: "Bolletje-pijltje met windrichting", image: "assets/images/bolletjepijltjewindrichting.jpg"}
    ];
  }

  getPlace() {
    var self = this;
    //FROM
    if(this.start.isCoordinate) {
      self.placeService.getPlace(self.to)
        .then(function(place){
          // GET DIRECTIONS
          self.routeService.getRoute()
            .then(function(routes){

              //set start/finish
              self.start.lat = routes.origin.geometry.coordinates[0];
              self.start.lng = routes.origin.geometry.coordinates[1];

              self.finish.lat = routes.destination.geometry.coordinates[0];
              self.finish.lng = routes.destination.geometry.coordinates[1];

              var route = routes.routes.length > 1 ? routes.routes[0] : routes.routes;
              var ins = [];

              for(let i = 0; i < route.steps.length; i++) {
                ins.push(route.steps[i]);
              }

              self.instructions = ins;
              self.saveData.set(ins);

            })

        });
    } else {
      this.placeService.getPlace(this.from)
        .then(function (place) {
          self.placeService.getPlace(self.to)
            .then(function (place) {

              // GET DIRECTIONS
              self.routeService.getRoute()
                .then(function (routes) {

                  //set start/finish
                  self.start.lat = routes.origin.geometry.coordinates[0];
                  self.start.lng = routes.origin.geometry.coordinates[1];

                  self.finish.lat = routes.destination.geometry.coordinates[0];
                  self.finish.lng = routes.destination.geometry.coordinates[1];

                  var route = routes.routes.length > 1 ? routes.routes[0] : routes.routes;
                  var ins = [];

                  for (let i = 0; i < route.steps.length; i++) {
                    ins.push(route.steps[i]);
                  }

                  self.instructions = ins;
                  self.saveData.set(ins);

                })

            });
        });
    }
  }
  getLocation() {
    if (navigator.geolocation) {
      var self = this;
      var coords = navigator.geolocation.getCurrentPosition(function(location){
        self.start.lat = location.coords.latitude;
        self.start.lng = location.coords.longitude;
        self.start.isCoordinate = true;

        self.from = location.coords.latitude + ";" + location.coords.longitude;
      });

    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }


  exportToCSV() {
    console.log(this.instructions);
    return this.instructions;
  }
}
