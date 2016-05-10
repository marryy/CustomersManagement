app.component('customerDetailsCmp', {
  templateUrl: 'src/components/customer-details-cmp/customer-details-cmp.html',
  bindings: { $router: '<' },
  controller: customersDetailsController
});


function customersDetailsController(customerService) {
  var $ctrl = this;

  this.$routerOnActivate = function(next, previous) {
    var id = next.params.id;

    customerService.get({ id: id }, function(cust) {
      $ctrl.customer = cust;
    });
  }
};
