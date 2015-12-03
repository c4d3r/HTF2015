/**
 * Created by Maxim on 03/12/2015.
 */
export class PlaceService {
  constructor($log, PlaceRestangular) {
    'ngInject';
    this.restangular = PlaceRestangular;
  }

  getPlace(from) {
    // GET LOCATIONS
    return this.restangular
      .one('mapbox.places/' + from)
      .get();
  }
}
