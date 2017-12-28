Ext.define('Alegra.view.Show', {
  extend: 'Ext.window.Window',
  alias : 'widget.contactShow',
  requires: ['Ext.form.Panel','Ext.form.FieldSet'],
  title : 'Visualizar',
  layout: 'fit',
  autoShow: true,
  width: 350,
  icon: 'https://cdn1.alegra.com/images/icons/zoom.png',
  itemId: 'Show',
  initComponent: function() {
    this.items = [{
      xtype: 'form',
      padding: '5 5 0 5',
      border: false,
      
      fieldDefaults: {
        anchor: '100%',
        labelAlign: 'justify',
      },
      items: [{
        xtype: 'displayfield',
        name: 'name',
        fieldLabel: '<strong>Nombre:</strong>',
        style : 'background-color:#DCDCDC',
      }, {
        xtype: 'displayfield',
        name: 'identification',
        fieldLabel: '<strong>Identificación:</strong>',
      }, {
        xtype: 'displayfield',
        name: 'phonePrimary',
        fieldLabel: '<strong>Telefono 1:</strong>',
        style : 'background-color:#DCDCDC',
      }, {
        xtype: 'displayfield',
        name: 'phoneSecondary',
        fieldLabel: '<strong>Telefono 2:</strong>',
      }, {
        xtype: 'displayfield',
        name: 'mobile',
        fieldLabel: '<strong>Celular:</strong>',
        style : 'background-color:#DCDCDC',
      }, {
        xtype: 'displayfield',
        name: 'address',
        fieldLabel: '<strong>Dirección:</strong>',
      }, {
        xtype: 'displayfield',
        name: 'city',
        fieldLabel: '<strong>Ciudad:</strong>',
        style : 'background-color:#DCDCDC',
      }, {
        xtype: 'displayfield',
        vtype: 'email',
        name: 'email',
        fieldLabel: '<strong>Email:</strong>',
      }, {
        xtype: 'displayfield',
        name: 'observations',
        fieldLabel: '<strong>Observaciones:</strong>',
        style : 'background-color:#DCDCDC',
      }],
    }];
    this.dockedItems = [{
      xtype: 'toolbar',
      dock: 'bottom',
      id: 'buttons',
      ui: 'footer',
      items: ['->', {
        icon: 'https://cdn1.alegra.com/images/icons/cancel.png',
        text: 'Cerrar',
        scope: this,
        handler: this.close,
      }],
    }];
    this.callParent(arguments);
  },
});
