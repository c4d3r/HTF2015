/**
 * Created by Maxim on 03/12/2015.
 */
/**
 * FULL API:
 * https://api.mapbox.com/v4/directions/{profile}/{waypoints}.json
 *  ?alternatives={true|false}
 *  &instructions={text|html}
 *  &geometry={geojson|polyline|false}
 *  &steps={true|false}
 *  &access_token=<your access token>
 */
export class RouteService {

  constructor($log, RouteRestangular) {
    'ngInject';
    this.restangular = RouteRestangular;

  }

  getRoute() {
    //// GET DIRECTIONS
    return this.restangular
      .one('directions/mapbox.walking/4.445,51.1566;4.757168,51.237457')
      .get();
  }

  //constructor(RouteRestangular) {
  //  'ngInject';
  //}
  //
  //getRoute() {
  //
  //  //// GET DIRECTIONS
  //  RouteRestangular
  //    .one('directions/mapbox.walking/-122.42,37.78;-77.03,38.91')
  //    .get()
  //    .then(function(directions) {
  //      console.log(directions);
  //    });
  //}
}
