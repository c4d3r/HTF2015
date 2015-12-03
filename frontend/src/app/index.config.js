export function config ($logProvider, toastrConfig, RestangularProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  var baseUrl = "https://api.mapbox.com/v4/";
  RestangularProvider.setDefaultRequestParams({access_token: "pk.eyJ1IjoiaHRmIiwiYSI6ImNpaHB5aWUzbjA0YXV0Nm00OWc1dmVhaW8ifQ.9FwnpyOmSoaN1rjfZyG0Yw"});
  RestangularProvider.setBaseUrl(baseUrl);
  RestangularProvider.setRequestSuffix('.json');
}
