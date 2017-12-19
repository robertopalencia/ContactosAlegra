Ext.define('Alegra.view.Viewport', {
	extend: 'Ext.Viewport',
	layout: 'fit',
	requires: [
		'Alegra.view.Grid',
		'Alegra.view.Form',
		'Alegra.view.Form2',
		'Alegra.view.Help',
		'Alegra.view.Show',
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
