Ext.define('Alegra.model.Model', {
	extend: 'Ext.data.Model',
	fields: [
	{ name: 'id', type: 'int', persist: false },
        { name: 'name', type: 'string' },
        { name: 'identificacion', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phonePrimary', type: 'string' },
        { name: 'phoneSecundary', type: 'string' },
        { name: 'fax', type: 'string' },
        { name: 'mobile', type: 'string' },
        { name: 'observations', type: 'string' },
        { name: 'priceList', type: 'int', defaultValue: null },
        { name: 'seller', type: 'int',  defaultValue: null },
        { name: 'term', type: 'int', defaultValue: null },
        { name: 'address', type: 'string' },
        { name: 'type', type: 'int' },
        { name: 'internalContacts', type: 'int' }
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
