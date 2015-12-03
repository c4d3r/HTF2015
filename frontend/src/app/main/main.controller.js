export class MainController {
  constructor ($timeout, toastr) {
    'ngInject';

    this.routeStyles = [
      {name: "Blinde Kaart"},
      {name: "Bolletje-Pijltje"},
      {name: "Bolletje-pijltje met windrichting"}
    ];
    toastr.success('Kies je kaart!', 'welkom traveller!');
  }
}
