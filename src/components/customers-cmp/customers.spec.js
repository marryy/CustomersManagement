describe('customers component', function () {
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

    component = $componentController('customersCmp', null, {$scope: $scope});
    $httpBackend.when('GET', /customers/).respond([]);
  }));

  describe('when created', function () {
    var customers = [
      { "_id" : 572124365873477662843836, "firstname": "Vlod", "lastname": "Nsfrut", "address": "135 Musd, Aerut Nfyoie"},
      { "_id" : 562843257425475457567836, "firstname": "Asdetu", "lastname": "Strens", "address": "346 Mues Vure, Bsaektfrg"}
    ];

    it('should have a "routerOnActivate" function defined', function() {
      expect(component.$routerOnActivate).toEqual(jasmine.any(Function));
    });

    it('should have a "getCustomers" function defined', function() {
      expect(component.getCustomers).toEqual(jasmine.any(Function));
    });

    it('should have a "deleteCustomer" function defined', function() {
      expect(component.deleteCustomer).toEqual(jasmine.any(Function));
    });

    it('should have a "save" function defined', function() {
      expect(component.save).toEqual(jasmine.any(Function));
    });
  });
});
