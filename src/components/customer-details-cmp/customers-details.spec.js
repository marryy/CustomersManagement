describe('customer details component', function () {
var component, $scope, $componentController, $compile;

  beforeEach(function () {
    angular.mock.module("customersManagement");
  });

  beforeEach(inject(function ($injector) {
    customerService = $injector.get('customerService');
    orderService = $injector.get('orderService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    // $httpBackend.verifyNoOutstandingRequest();
  });

  beforeEach(inject(function($rootScope, _$componentController_, _$compile_) {
    $scope = $rootScope.$new();
    $rootScope = $rootScope;
    $componentController = _$componentController_;
    $compile = _$compile_;

    component = $componentController('customerDetailsCmp', {$scope: $scope});
    $httpBackend.when('GET', /customer/).respond({});
  }));

  describe('when created', function () {
    var customer = { "_id" : 572124365873477662843836, "firstname": "Vlod", "lastname": "Nsfrut", "address": "135 Musd, Aerut Nfyoie"};

    it('should have a "routerOnActivate" function defined', function() {
      expect(component.$routerOnActivate).toEqual(jasmine.any(Function));
    });

    it('should render the customer on init - routerOnActivate function', function() {
      var customerId = '1q2w';
      var customer = {id: customerId, name: 'Customer one'};
      var products = [{name: 'Phone', price: 100, category: 'phone'}];

      $httpBackend.expect('GET', /collections\/customers/).respond(customer);

      component.$routerOnActivate({params: { id: customerId } });
      $httpBackend.flush();

console.log($scope.customer);
      //expect(scope.customer.id).toEqual(customer.id);
    });
    //
    // it('should make a delete request after calling the "deleteCustomer" function', function () {
    //   spyOn(component, 'deleteCustomer');
    //   spyOn(customerService, 'save');
    //
    //   component.deleteCustomer(562843257425475457567836);
    //
    //   expect(component.deleteCustomer).toHaveBeenCalledWith(562843257425475457567836);
    // });
    //
    // it('should make a put request after calling the "save" function', function () {
    //   var customer = { "_id" : "562843257425475457569985", "firstname": "Gwert", "lastname": "Nsret", "address": "67 Merwy NBsaet, Aasret, Gwrt"}
    //
    //   $httpBackend.expectPOST(/customers/, customer).respond(customer);
    //
    //   component.save(customer);
    //
    //   $httpBackend.flush();
    //
    //   expect(component.customers[0].firstname).toEqual("Gwert");
    // });

  });
});


//
// describe('Customer details component', function() {
//   var component, scope, $httpBackend;
//
//   beforeEach(module('custManagement'));
//   beforeEach(inject(function($rootScope, $componentController, _$httpBackend_) {
//     scope = $rootScope.$new();
//     $httpBackend =  _$httpBackend_;
//     component = $componentController('cmCustomerDetails', {
//       $scope: scope
//     });
//   }));
//
//   afterEach(function() {
//     $httpBackend.verifyNoOutstandingExpectation();
//   });
//
//   it('should define an $routerOnActivate function on the component', function() {
//     expect(component.$routerOnActivate).toEqual(jasmine.any(Function));
//   });
//
//   it('should query customers/products on $routerOnActivate and save them on scope', function() {
//     var customerId = '1q2w';
//     var customer = {id: customerId, name: 'Customer one'};
//     var products = [{name: 'Phone', price: 100, category: 'phone'}];
//
//     $httpBackend.expect('GET', /collections\/customers/).respond(customer);
//     $httpBackend.expect('GET', /collections\/products/).respond(products);
//
//     component.$routerOnActivate({params: { id: customerId } });
//     $httpBackend.flush();
//
//     expect(scope.customer.id).toEqual(customer.id);
//     expect(scope.products[0].name).toEqual(products[0].name);
//   });
//
//   it('should define an addOrder function on the component', function() {
//     expect(component.addOrder).toEqual(jasmine.any(Function));
//   });
//
//   it('should add order to the customer and update the DB on addOrder', function() {
//     var order = {name: 'Phone', price: 100, category: 'phone'};
//     scope.customer = {_id: {$oid: '1q2w'}, name: 'John', orders: []};
//
//     $httpBackend.expect('PUT', /collections\/customers\/1q2w/).respond({});
//     component.addOrder(order);
//
//     expect(scope.customer.orders).toEqual([order]);
//   });
// });
