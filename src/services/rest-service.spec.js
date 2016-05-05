describe("customer service", function() {
  var customerService, $httpBackend;

  beforeEach(module('restService'));

  beforeEach(inject(function ($injector) {
    customerService = $injector.get('customerService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have a "get" function defined', function () {
    expect(customerService.get).toEqual(jasmine.any(Function));
  });

  it('should have an "update" function defined', function () {
    expect(customerService.update).toEqual(jasmine.any(Function));
  });

  it('should have a "save" function defined', function () {
    expect(customerService.save).toEqual(jasmine.any(Function));
  });

  it('should have a "remove" function defined', function () {
    expect(customerService.delete).toEqual(jasmine.any(Function));
  });

  it('should send a PUT request on update', function () {
    $httpBackend.expectPUT(/cust/).respond({});
    customerService.update();
    $httpBackend.flush();
  });

  it('should make a DELETE request on "delete"', function () {
    var customer = { _id: { $oid: '5721c44ff8c2e776a0ea388a' }, "firstname": "Vlod", "lastname": "Nsfrut", "address": "135 Musd, Aerut Nfyoie" };

    $httpBackend.expectDELETE(/5721c44ff8c2e776a0ea388a/).respond({});
    customerService.delete(customer);
    $httpBackend.flush();
  });
});

describe("order service", function() {
  var orderService, $httpBackend;

  beforeEach(module('restService'));

  beforeEach(inject(function ($injector) {
    orderService = $injector.get('orderService');
    $httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should have a "get" function defined', function () {
    expect(orderService.get).toEqual(jasmine.any(Function));
  });

  it('should have an "update" function defined', function () {
    expect(orderService.update).toEqual(jasmine.any(Function));
  });

  it('should have a "save" function defined', function () {
    expect(orderService.save).toEqual(jasmine.any(Function));
  });

  it('should have a "remove" function defined', function () {
    expect(orderService.delete).toEqual(jasmine.any(Function));
  });

  it('should make a DELETE request on "delete"', function () {
    var customer = { _id: { $oid: '5721c44ff8c2e776a0ea388a' }, "firstname": "Vlod", "lastname": "Nsfrut", "address": "135 Musd, Aerut Nfyoie" };

    $httpBackend.expectDELETE(/5721c44ff8c2e776a0ea388a/).respond({});
    orderService.delete(customer);
    $httpBackend.flush();
  });
});
