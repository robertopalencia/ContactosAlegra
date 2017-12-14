Ext.define('Alegra.view.Form', {
  extend: 'Ext.window.Window',
  alias : 'widget.contactForm',
  requires: ['Ext.form.Panel','Ext.form.field.Text'],
  title : 'Editar Contacto',
  layout: 'fit',
  autoShow: true,
  width: 650,
    
 
  icon:'https://cdn1.alegra.com/images/icons/page_edit.png',
  itemId: 'modalForm',
  initComponent: function() {
    this.items = [{
      layout: 'column',
      xtype: 'form',
      padding: '5 5 0 5',
      border: false,
      style: 'background-color: #fff;',
      fieldDefaults: {
        anchor: '100%',
        labelAlign: 'right',
        allowBlank: false,
        combineErrors: true,
        msgTarget: 'side',
      },
      items: [{
        columnWidth: 0.5,
        border: false,
        items: [{
          xtype: 'textfield',
          name: 'id',
          fieldLabel: 'id',
          hidden: true,
        }, {
          xtype: 'textfield',
          name: 'name',
          fieldLabel: '<strong>Nombre</strong>',
			
        }, {
          xtype: 'textfield',
          name: 'identification',
          fieldLabel: '<strong>Identificación</strong>',
          
        }, {
          xtype: 'textfield',
          name: 'address',
          fieldLabel: '<strong>Dirección</strong>',
          
        }, {
          xtype: 'textfield',
          name: 'city',
          fieldLabel: '<strong>Ciudad</strong>',
         
        }, {
          xtype: 'textfield',
          vtype: 'email',
          name: 'email',
          fieldLabel: '<strong>Email</strong>',
          
        }, {
          xtype: 'textfield',
          name: 'phonePrimary',
          fieldLabel: '<strong>Teléfono 1</strong>',
          
        }, {
          xtype: 'textfield',
          name: 'phoneSecondary',
          fieldLabel: '<strong>Teléfono 2</strong>',
          allowBlank: true,
        }, {
          xtype: 'textfield',
          name: 'fax',
          fieldLabel: '<strong>Fax</strong>',
          allowBlank: true,
        }, {
          xtype: 'textfield',
          name: 'mobile',
          fieldLabel: '<strong>Celular</strong>',
          
        }]
      }, {
        columnWidth: 0.5,
        border: false,
        items: [{
          xtype: 'combobox',
          name: 'priceList',
          fieldLabel: '<strong>Lista de precios</strong>',
          emptyText: 'Ninguna',
          editable: false,
          store: new Ext.data.SimpleStore({
            data: [[0, 'Ninguna'], [1, 'General']],
  					fields : ['value', 'text'],
  				}),
          valueField : 'value',
  		    displayField : 'text',
          allowBlank: true,
        }, {
          xtype: 'combobox',
          name: 'seller',
          fieldLabel: '<strong>Vendedor</strong>',
          emptyText: 'Ninguno',
          editable: false,
          store: new Ext.data.SimpleStore({
            data: [[0, 'Ninguno']],
  					fields : ['value', 'text'],
  				}),
          valueField : 'value',
  		    displayField : 'text',
          allowBlank: true,
        }, {
          xtype: 'combobox',
          name: 'term',
          fieldLabel: '<strong>Términos de pago</strong>',
          emptyText: 'Vencimiento manual',
          editable: false,
          store: new Ext.data.SimpleStore({
            data: [
              [0, 'Vencimiento manual'],
              [1, 'De contado'],
              [2, '8 días'],
              [3, '15 días'],
              [4, '30 días'],
              [5, '60 días'],
            ],
  					fields : ['value', 'text'],
  				}),
          valueField : 'value',
  		    displayField : 'text',
          allowBlank: true,
        }, {
          xtype: 'checkboxfield',
          name: 'isClient',
          itemId: 'Client',
          fieldLabel: '<strong>Cliente</strong>',
        }, {
          xtype: 'checkboxfield',
          name: 'isProvider',
          itemId: 'Provider',
          fieldLabel: '<strong>Proveedor</strong>',
        }, {
          xtype: 'textareafield',
          name: 'observations',
          fieldLabel: '<strong>Observaciones</strong>',
          allowBlank: true,
        }],
      }],
    }],
    this.dockedItems = [{
      xtype: 'toolbar',
      dock: 'bottom',
      id: 'buttons',
      ui: 'footer',
      items: ['->', {
        icon: 'https://cdn1.alegra.com/images/icons/page_edit.png',
        text: 'Editar',
        action: 'save'
      }, {
        icon: 'https://cdn1.alegra.com/images/icons/cancel.png',
        text: 'Cancelar',
        scope: this,
        handler: this.close,
      }],
    }];
    this.callParent(arguments);
  },
});
