app.component('appCmp', {
	templateUrl: 'src/components/app-cmp/app-cmp.html',
	$routeConfig: [
		{ path: '/', component: 'customersCmp', name: 'Customers', useAsDefault: true },
		{ path: '/customer/:id', component: 'customerDetailsCmp', name: 'Customer' },
		{ path: '/orders', component: 'ordersCmp', name: 'Orders' }
	]
});
