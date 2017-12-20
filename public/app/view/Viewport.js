Ext.define('Alegra.view.Viewport', {
	extend: 'Ext.Viewport',
	layout: 'fit',
	requires: [
		'Alegra.view.Grid',
		'Alegra.view.Add',
		'Alegra.view.Edit',
		'Alegra.view.Show',
        'Alegra.view.Help',
        
	],
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			items: [{
                
				xtype : 'contactGrid',
			}],
		});
		me.callParent(arguments);
	},
});
