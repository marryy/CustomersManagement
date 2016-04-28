function customersController(customerService, orderService) {
  var $ctrl = this;
  this.$routerOnActivate = function() {
    return $ctrl.getCustomers();
  }

  $ctrl.getCustomers = function() {
    customerService.query(function(customers) {
      // customers.forEach(function(cust) {
      //   orderService.get({customerId: "5721b7ecf8c2e776a0ea01f5"}, function(order) {
      //     console.log( order);
      //   });
      // });

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

angular.module('app.customers', [])
.component('customersCmp', {
  templateUrl: 'src/components/customers-cmp/customers-cmp.html',
  controller: customersController
});
