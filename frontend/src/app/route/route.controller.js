/**
 * Created by Maxim on 03/12/2015.
 */
export class RouteController {
  constructor ($stateParams, $log, Restangular) {
    'ngInject';

    //Restangular.setFullResponse(true);
    Restangular.one('directions/mapbox.walking/-122.42,37.78;-77.03,38.91').get()
      .then(function(directions) {
        console.log(directions);
      });
  }
}
