/**
 * Created by Maxim on 03/12/2015.
 */
export class RouteRestangular {
  constructor(Restangular) {
    'ngInject';

    return Restangular.withConfig(function(RestangularConfigurer){
      let apiHost = "https://api.mapbox.com/v4/";
      RestangularConfigurer.setBaseUrl(apiHost);
    });


  }
}
RouteRestangular.$inject = ['Restangular'];


//export class RouteRestangular {
//  constructor(Restangular) {
//    'ngInject';
//
//    Restangular.withConfig(function(RestangularConfigurer){
//      this.apiHost = "https://api.mapbox.com/v4/";
//      RestangularConfigurer.setBaseUrl(this.apiHost);
//    })
//  }
//}
