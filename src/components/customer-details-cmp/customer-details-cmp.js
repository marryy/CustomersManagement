app.component('customerDetailsCmp', {
  templateUrl: 'src/components/customer-details-cmp/customer-details-cmp.html',
  bindings: { $router: '<' },
  controller: customersDetailsController
});


function customersDetailsController(customerService, orderService) {
  var $ctrl = this;

  this.$routerOnActivate = function(next, previous) {
    var id = next.params.id;

    customerService.get({ id: id }, function(cust) {
      $ctrl.customer = cust;
    });

    //orderService.get({ customerId: parameterID }) - returns all orders?!
    orderService.query(function(orders) {
      orders.forEach(function(order) {
        if(order.customerId === $ctrl.customer._id.$oid) {
          $ctrl.customer.orders = order.products;
        }
      });
    });
  }
};
