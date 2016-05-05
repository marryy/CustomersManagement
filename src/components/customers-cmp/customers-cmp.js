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
    customerService.get({ id: custId }, function(custToDel) {
      $ctrl.cust = custToDel;
      customerService.delete({id: custId}, function() {
        $ctrl.getCustomers();
      });
    });
  };

  this.save = function() {
    customerService.save($ctrl.newCust, function() {
      $ctrl.getCustomers();
      $ctrl.newCust = {};
    });
  }
}

app.component('customersCmp', {
  templateUrl: 'src/components/customers-cmp/customers-cmp.html',
  controller: customersController
});
