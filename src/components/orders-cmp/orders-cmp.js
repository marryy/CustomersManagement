function ordersController(orderService, customerService) {
  var $ctrl = this;
  this.$routerOnActivate = function() {
    return $ctrl.getOrders();
  }

  $ctrl.getOrders = function() {
    orderService.query(function(orders) {
      $ctrl.orders = orders;
      $ctrl.orders.forEach(function(order) {
        customerService.get({id: order.customerId}, function(customer) {
          order.customername = customer.firstname + ' ' + customer.lastname;
        })
      });
    });
  }


}

app.component('ordersCmp', {
  templateUrl: 'src/components/orders-cmp/orders-cmp.html',
  controller: ordersController
});
