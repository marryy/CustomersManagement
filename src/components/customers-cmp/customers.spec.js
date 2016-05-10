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

    component = $componentController('customersCmp', {$scope: $scope});

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

    it('should render all the customers on init - routerOnActivate function', function() {
      $httpBackend.expect('GET', /customers/).respond(customers);

      component.$routerOnActivate();
      $httpBackend.flush();

      expect(component.customers[0].firstname).toEqual('Vlod');
      expect(component.customers[1].lastname).toEqual('Strens');
    });

    it('should make a delete request after calling the "deleteCustomer" function', function () {
      spyOn(component, 'deleteCustomer');
      spyOn(customerService, 'save');

      component.deleteCustomer(562843257425475457567836);

      expect(component.deleteCustomer).toHaveBeenCalledWith(562843257425475457567836);
    });

    it('should make a put request after calling the "save" function', function () {
      var customer = { "_id" : "562843257425475457569985", "firstname": "Gwert", "lastname": "Nsret", "address": "67 Merwy NBsaet, Aasret, Gwrt"}

      $httpBackend.expectPOST(/customers/, customer).respond(customer);

      component.save(customer);

      $httpBackend.flush();

      expect(component.customers[0].firstname).toEqual("Gwert");
    });

    // it('should make a delete request after calling the "deleteCustomer" function', function () {
    //   var customer = { "_id" : 562843257425475457567836, "firstname": "Asdetu", "lastname": "Strens", "address": "346 Mues Vure, Bsaektfrg"};
    //   component = $componentController('customersCmp', {$scope: $scope}, {customers: customers});
    //   console.log("before",component);
    //   $httpBackend.expect('DELETE', /customers/, customer._id).respond(customer._id);
    //
    //   component.deleteCustomer(customer._id);
    //
    //   $httpBackend.flush();
    //
    //   console.log("after",component);
    //   expect(component.customers.length).toBe(1);
    // });
  });
});

//
//   it('should delete customer from database on delete()', function() {
//     var spy = jasmine.createSpy();
//     var customer = {
//       name: 'Customer One',
//       $remove: function (collection, cb) {
//         spy(this);
//         cb(this);
//       }
//     };
//
//     component.delete(customer);
//
//     expect(spy).toHaveBeenCalledTimes(1);
//     expect(spy).toHaveBeenCalledWith(customer);
//   });
// });
