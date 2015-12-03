/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { RouteController } from './route/route.controller';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { MapDirective } from '../app/components/map/map.directive';

angular.module('frontend', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'restangular', 'ui.router', 'ngMaterial', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  //.service('githubContributor', GithubContributorService)
  .controller('MainController', MainController)
  .controller('RouteController', RouteController)
  .directive('navbar', NavbarDirective)
  .directive('map', MapDirective);
