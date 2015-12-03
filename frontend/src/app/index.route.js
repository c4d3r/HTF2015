export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/route/:routeId',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('route', {
      url: '/',
      templateUrl: 'app/route/route.html',
      controller: 'RouteController',
      controllerAs: 'route'
    })
    .state('route/bolletje_pijltje', {
      url: '/',
      templateUrl: 'app/route/route_bolletje_pijltje.html',
      controller: 'RouteBolletjePijltjeController',
      controllerAs: 'route'
    });

  $urlRouterProvider.otherwise('/');
}
