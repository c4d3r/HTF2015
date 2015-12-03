/**
 * Created by Maxim on 03/12/2015.
 */
export function MapDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/map/map.html',
    scope: {
      creationDate: '='
    },
    controller: MapController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class MapController {
  constructor (moment) {
    'ngInject';

    mapboxgl.accessToken = 'pk.eyJ1IjoiaHRmIiwiYSI6ImNpaHB5aWUzbjA0YXV0Nm00OWc1dmVhaW8ifQ.9FwnpyOmSoaN1rjfZyG0Yw';
    var map = new mapboxgl.Map({
      container: 'map', // container id
      style: 'mapbox://styles/mapbox/streets-v8', //stylesheet location
      center: [-74.50, 40], // starting position
      zoom: 9 // starting zoom
    });

    // "this.creation" is available by directive option "bindToController: true"
    this.relativeDate = moment(this.creationDate).fromNow();
  }
}

