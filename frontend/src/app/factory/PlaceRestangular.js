/**
 * Created by Maxim on 03/12/2015.
 */
export class PlaceRestangular {

  constructor(Restangular) {
    'ngInject';

    return Restangular.withConfig(function(RestangularConfigurer){
      let apiHost = "https://api.mapbox.com/geocoding/v5/";
      RestangularConfigurer.setBaseUrl(apiHost);
    })
  }

}

PlaceRestangular.$inject = ['Restangular'];
