function editCustController(orderService, customerService) {
  var $ctrl = this;

  this.$routerOnActivate = function(next, previous) {
    var id = next.params.id;

    customerService.get({ id: id }, function(cust) {
      $ctrl.customer = cust;
    });
  }

  this.update = function(customer) {
    customerService.update({id: customer._id.$oid}, {
      firstname: customer.firstname,
      lastname: customer.lastname,
      address: customer.address,
      orders: customer. orders
    }, function() {
      $ctrl.customer = customer;
    });
  };
}

app.component('editCustomerCmp', {
  templateUrl: 'src/components/edit-customer-cmp/edit-customer-cmp.html',
  bindings: { $router: '<' },
  controller: editCustController
});
