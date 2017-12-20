Ext.define('Alegra.model.Model', {
	extend: 'Ext.data.Model',
	fields: [
		'id',
		'name',
		'identification',
		{ name: 'address', mapping: 'address.address' },
		{ name: 'city', mapping: 'address.city' },
		'email',
		'phonePrimary',
		'phoneSecondary',
		'fax',
		'mobile',
		'priceList',
		'seller',
		'term',
		'isClient',
		'isProvider',
		'observations',
	],
	
	
