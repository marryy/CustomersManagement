describe('edit customer component', function () {
var component, $scope, $componentController, $compile;

  beforeEach(function () {
    angular.mock.module("customersManagement");
  });

  beforeEach(inject(function ($injector) {
    customerService = $injector.get('customerService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  beforeEach(inject(function($rootScope, _$componentController_, _$compile_) {
    $scope = $rootScope.$new();
    $rootScope = $rootScope;
    $componentController = _$componentController_;
    $compile = _$compile_;

    component = $componentController('ordersCmp', {$scope: $scope});
    $httpBackend.when('GET', /customers/).respond([]);
  }));

  describe('when created', function () {
    var customers = [
      { "_id" : 572124365873477662843836, "firstname": "Vlod", "lastname": "Nsfrut", "address": "135 Musd, Aerut Nfyoie", "orders": [{"name": "Bsg", "price": 40, "count": 3}]},
      { "_id" : 562843257425475457567836, "firstname": "Asdetu", "lastname": "Strens", "address": "346 Mues Vure, Bsaektfrg", "orders": [{"name": "Nsdg Utyr", "price": 45, "count": 2}, {"name": "Klkuy", "price": 8, "count": 6}]}
    ];

    it('should have a "routerOnActivate" function defined', function() {
      expect(component.$routerOnActivate).toEqual(jasmine.any(Function));
    });

    it('should have a "getCustomers" function defined', function() {
      expect(component.getCustomers).toEqual(jasmine.any(Function));
    });

    it('should have a "save" function defined', function() {
      expect(component.save).toEqual(jasmine.any(Function));
    });


    it('should render all the orders and their totals on init - routerOnActivate function', function() {
      $httpBackend.expect('GET', /customers/).respond(customers);

      component.$routerOnActivate();
      $httpBackend.flush();

      expect(component.customers[0].total).toEqual(120);
      expect(component.customers[1].total).toEqual(138);
    });

  });
});
