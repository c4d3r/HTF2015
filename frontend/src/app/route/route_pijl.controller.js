/**
 * Created by Maxim on 03/12/2015.
 */
export class RouteController {
  constructor ($stateParams, $log, PlaceService, RouteService) {
    'ngInject';

    this.placeService = PlaceService;
    this.routeService = RouteService;

    //this.from = "Torenblokstraat+15";
    //this.to = "Pater+Damiaanstraat+51";
    this.from = "Edegem";
    this.to = "Geel";

    this.instructions = [];

    this.routeStyles = [
      {name: "Blinde Kaart", image: "app/images/blindekaart.jpg"},
      {name: "Bolletje-Pijltje", image: "app/images/bolletjepijltje.jpg"},
      {name: "Bolletje-pijltje met windrichting", image: "app/images/bolletjepijltjewindrichting.jpg"}
    ];
  }

  getPlace() {
    var self = this;
    console.log(this.from);
    //FROM
    this.placeService.getPlace(this.from)
      .then(function(place){

        console.log(place.features);

        self.placeService.getPlace(self.to)
          .then(function(place){
            console.log(place.features);

            // GET DIRECTIONS
            self.routeService.getRoute()
              .then(function(routes){
                console.log(routes);

                var route = routes.routes.length > 1 ? routes.routes[0] : routes.routes;
                var ins = [];

                for(let i = 0; i < route.steps.length; i++) {
                  ins.push(route.steps[i]);
                }

                self.instructions = ins;
                this.routeService.instructions.current = ins;
              })

          });
      });
  }

  exportToCSV() {
    return this.instructions;
  }
}
