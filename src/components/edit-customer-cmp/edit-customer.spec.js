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

    component = $componentController('editCustomerCmp', {$scope: $scope});
    $httpBackend.when('GET', /customer/).respond({});
  }));

  describe('when created', function () {
    var customer = { "_id" : 572124365873477662843836, "firstname": "Vlod", "lastname": "Nsfrut", "address": "135 Musd, Aerut Nfyoie"};

    it('should have a "routerOnActivate" function defined', function() {
      expect(component.$routerOnActivate).toEqual(jasmine.any(Function));
    });

    it('should have a "update" function defined', function() {
      expect(component.update).toEqual(jasmine.any(Function));
    });

    it('should render the customer on init - routerOnActivate function', function() {

      $httpBackend.expect('GET', /customer/).respond(customer);

      component.$routerOnActivate({params: { id: customer.id } });
      $httpBackend.flush();

      expect(component.customer.id).toEqual(customer.id);
    });

    it('should make a put request after calling the "update" function and update the customer', function () {
      var newCustomer = { "_id" : '572124365873477662843836', "firstname": "Gwert"}

      component = $componentController('editCustomerCmp', {$scope: $scope}, {customer: customer});

      $httpBackend.expectPUT(/customer/).respond(newCustomer);

      component.update(newCustomer);

      $httpBackend.flush();

      expect(component.customer.firstname).toEqual("Gwert");
    });
  });
});
