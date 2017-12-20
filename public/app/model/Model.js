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
	
	validators: {
        name: [
            'presence',
            { type: 'length', max:90 },
        ],
        identificacion: [
            { type: 'length', max:45 },
        ],
        email: [
            { type: 'length', max:100 },
        ],
        phonePrimary: [
            { type: 'length', max:45 },
        ],
        phoneSecundary: [
            { type: 'length', max:45 },
        ],
        fax: [
            { type: 'length', max:45 },
        ],
        mobile: [
            { type: 'length', max:45 },
        ],
        observations: [
            { type: 'length', max:500 },
        ],
    },
});
