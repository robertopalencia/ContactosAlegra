Ext.define('Alegra.model.Model', {
	extend: 'Ext.data.Model',
	fields: [
	{ name: 'id', type: 'int', persist: false },
        { name: 'name', type: 'string' },
        { name: 'identification', type: 'string' },
        { name: 'address', type:'string', mapping: 'address.address' },
	{ name: 'city', type:'string', mapping: 'address.city' },
        { name: 'email', type: 'string' },
        { name: 'phonePrimary', type: 'string' },
        { name: 'phoneSecondary', type: 'string' },
        { name: 'fax', type: 'string' },
        { name: 'mobile', type: 'string' },
        { name: 'observations', type: 'string' },
        { name: 'priceList', type: 'int'},
        { name: 'seller', type: 'int'},
        { name: 'term', type: 'int'},
        { name: 'type', type: 'int' },
        { name: 'internalContacts', type: 'int' },
        'isClient',
	'isProvider'
	],
    
    validators: {
        name: [
            'presence',
            { type: 'length', max:90 },
        ],
        identification: [
            { type: 'length', max:45 },
        ],
        email: [
            { type: 'length', max:100 },
        ],
        phonePrimary: [
            { type: 'length', max:45 },
        ],
        phoneSecondary: [
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

	
