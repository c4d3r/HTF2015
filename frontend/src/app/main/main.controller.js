export class MainController {
  constructor ($timeout, $log, Restangular) {
    'ngInject';

    this.routeStyles = [
      {name: "Blinde Kaart", image: "app/images/blindekaart.jpg"},
      {name: "Bolletje-Pijltje", image: "app/images/bolletjepijltje.jpg"},
      {name: "Bolletje-pijltje met windrichting", image: "app/images/bolletjepijltjewindrichting.jpg"}
    ];

    //toastr.success('Kies je kaart!', 'welkom traveller!');
  }
}
