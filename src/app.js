var app = angular.module('customersManagement', [
    'ngComponentRouter',
    'ngResource',
    'restService']);

app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

app.value('$routerRootComponent', 'appCmp');
