function ordersController(customerService) {
  var $ctrl = this;
  $ctrl.showEditForm = false;

  this.$routerOnActivate = function() {
    return $ctrl.getCustomers();
  }

  $ctrl.getCustomers = function() {
    return customerService.query(function(customers) {
      customers.forEach(function(customer) {
        var sum = 0;
        for(var i = 0; i < customer.orders.length; i++) {
          sum += customer.orders[i].price * customer.orders[i].count;
        }
        customer.total = sum;
      })
      $ctrl.customers = customers;
    });
  }

  this.save = function(cust, order) {
    customerService.update({id: cust._id.$oid}, {
      firstname: cust.firstname,
      lastname: cust.lastname,
      address: cust.address,
      orders: order
    }, function() {
      return $ctrl.getCustomers();
    });
  }

}

app.component('ordersCmp', {
  templateUrl: 'src/components/orders-cmp/orders-cmp.html',
  controller: ordersController
});
