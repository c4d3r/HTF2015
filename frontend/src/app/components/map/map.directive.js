/**
 * Created by Maxim on 03/12/2015.
 */
export function MapDirective() {

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/map/map.html',
    scope: {
      startLat: '=',
      startLng: '=',
      finishLat: '=',
      finishLng: '='
    },
    controller: MapController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

export class MapController {

  constructor() {
    'ngInject';

    L.mapbox.accessToken = 'pk.eyJ1IjoiaHRmIiwiYSI6ImNpaHB5aWUzbjA0YXV0Nm00OWc1dmVhaW8ifQ.9FwnpyOmSoaN1rjfZyG0Yw';

    // example origin and destination
    if(!this.startLat || !this.finishLat) {
      var start = {lat: 4.445618152618408, lng: 51.15686798095703};
      var finish = {lat: 4.757542133331299, lng: 51.23752975463867};
    } else {
      var start = {lat: this.startLat, lng: this.startLng};
      var finish = {lat: this.finishLat, lng: this.finishLng};
    }

    var map = L.mapbox.map('map', 'mapbox.streets', {
      zoomControl: false
    }).setView([start.lng, start.lat], 15);

    map.attributionControl.setPosition('bottomleft');
    var directions = L.mapbox.directions({
      profile: 'mapbox.walking'
    });

    var directionsLayer = L.mapbox.directions.layer(directions).addTo(map);
    var directionsRoutesControl = L.mapbox.directions.routesControl('routes', directions)
      .addTo(map);


    var destination = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [start.lat, start.lng]
      },
      "properties": {
        "title": 'Start point',
        "description": 'Street',
        "marker-color": "#3ca0d3",
        "marker-size": "large",
        "marker-symbol": "star"
      }
    };

    var origin = {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [finish.lat, finish.lng]
      },
      "properties": {
        "title": 'You',
        "description": '',
        "marker-color": "#ff0000",
        "marker-size": "large",
        "marker-symbol": "heart"
      }
    };

    directions
      .setOrigin(origin)
      .setDestination(destination)
      .query();

  }

  startLatChanged(newValue, oldValue) {
    this.start.lat = newValue;
  }
  startLngChanged(newValue, oldValue) {
    this.start.lng = newValue;
  }
  finishLatChanged(newValue, oldValue) {
    this.finish.lat = newValue;
  }
  finishLngChanged(newValue, oldValue) {
    this.finish.lng = newValue;
  }
}

MapController.$inject = ['$scope'];
