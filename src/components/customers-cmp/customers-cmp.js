function customersController(customerService, orderService) {
  var $ctrl = this;

  this.$routerOnActivate = function() {
    $ctrl.getCustomers();
  }

  $ctrl.getCustomers = function() {
    return customerService.query(function(customers) {
      $ctrl.customers = customers;
    });
  }

  this.deleteCustomer = function(custId) {
    customerService.delete({id: custId}, function() {});
  };

  this.save = function(newCust) {
    return customerService.save(newCust, function() {
      $ctrl.customers = $ctrl.customers || [];
      $ctrl.customers.push(newCust);
      $ctrl.newCust = {};
    });
  }
}

app.component('customersCmp', {
  templateUrl: 'src/components/customers-cmp/customers-cmp.html',
  controller: customersController
});
