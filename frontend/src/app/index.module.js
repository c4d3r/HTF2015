/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { RouteController } from './route/route.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MapDirective } from '../app/components/map/map.directive';
import { RouteRestangular } from './factory/RouteRestangular';
import { PlaceRestangular } from './factory/PlaceRestangular';
import { SaveData } from './factory/SaveData';
import { PlaceService } from './services/PlaceService';
import { RouteService } from './services/RouteService';
import { RoutePijltjeController } from './route/route_pijl.controller';

angular.module('frontend', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ngMaterial', 'toastr', 'ngCsv'])
  //.constant('malarkey', malarkey)
  //.constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  //.factory('PlaceRestangular', PlaceRestangular)
  .factory('PlaceRestangular', ['Restangular', (Restangular) => new PlaceRestangular(Restangular)])
  .factory('RouteRestangular', ['Restangular', (Restangular) => new RouteRestangular(Restangular)])
  .factory('SaveData', ['Restangular', (Restangular) => new SaveData(Restangular)])
  .service('PlaceService', PlaceService)
  .service('RouteService', RouteService)
  .controller('MainController', MainController)
  .controller('RouteController', RouteController)
  .controller('RoutePijltjeController', RoutePijltjeController)
  .directive('navbar', NavbarDirective)
  .directive('map', MapDirective)
  //.directive('map', ['$scope', ($scope) => new MapDirective($scope)])

  //.directive('map', ['$scope', ($scope) => new MapDirective($scope)]);

