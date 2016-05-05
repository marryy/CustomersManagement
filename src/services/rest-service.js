var service = angular.module('restService', ['ngResource']);

service.factory('customerService', ['$resource', function($resource){
  var url = 'https://api.mlab.com/api/1/databases/customers-db/collections/customers/:id?apiKey=JeGtL7Yo1AgC-OBOTpg2OQKteNdo6-Fr';
  return $resource(url, {id: '@_id'} ,{
    update: {
      method: 'PUT'
    }
  });
}]);

service.factory('orderService', ['$resource', function($resource){
  var url = 'https://api.mlab.com/api/1/databases/customers-db/collections/orders/:id?apiKey=JeGtL7Yo1AgC-OBOTpg2OQKteNdo6-Fr';
  return $resource(url, {id: '@_id'} ,{
    update: {
      method: 'PUT'
    }
  });
}]);
