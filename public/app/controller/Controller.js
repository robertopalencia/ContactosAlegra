Ext.define('Alegra.controller.Controller', {
	extend: 'Ext.app.Controller',
	stores: ['Store'],
	models: ['Model'],
	views: ['Add', 'Edit', 'Grid', 'Show', 'Help'],
	refs: [ {
		ref: 'contactGrid',
		selector: 'grid',
	}],
	init: function() {
		this.control({
			'contactGrid button[action=add]': {
				click: this.LoadAddContact,
			},
			'contactGrid dataview': {
				itemdblclick: this.LoadAddContact,
			},
			'contactAdd button[action=save]': {
				click: this.AddContact,
			},
			'contactEdit button[action=save]': {
				click: this.EditContact,
			},
			
			'contactGrid button[action=delete]': {
				click: this.deleteContact,
			},
			
		});
	},
	
	LoadAddContact(grid, record) {
		var agregar = Ext.create('Alegra.view.Add').show();
        
		
		if (record.stores != null) {
			agregar.down('form').loadRecord(record);	
		}
	},
	AddContact(button) {
		var win = button.up('window');
		var form   = win.down('form');
		var record = form.getRecord();
		var values = form.getValues();
		record = Ext.create('Alegra.model.Model');
        record.set(values);
        this.getStoreStore().add(record);
        var myMask = new Ext.LoadMask(Ext.getBody(), { msg:"Por favor, espere..." });
		myMask.show();
		this.getStoreStore().sync({
			success: function (batch, action) {
				myMask.hide();
				this.getStoreStore().load();
				var reader = batch.proxy.getReader();
				Ext.Msg.alert('Hecho', 'Contacto Agregado exitosamente');
				win.close();
			},
			failure: function (batch, action) {
				myMask.hide();
				var reader = batch.proxy.getReader();
				Ext.Msg.alert('Fallo', reader.jsonData ? reader.jsonData.message : '¡Algo anda mal!');
			},
			scope: this,
		});
	},
	
	EditContact(button) {
		var win = button.up('window');
		var form   = win.down('form');
		var record = form.getRecord();
		var values = form.getValues();
		record.set(values);
		var myMask = new Ext.LoadMask(Ext.getBody(), { msg:"Por favor, espere..." });
		myMask.show();
		this.getStoreStore().sync({
			success: function (batch, action) {
				myMask.hide();
				var reader = batch.proxy.getReader();
				Ext.Msg.alert('Hecho', 'Contacto Editado Exitosamente');
				win.close();
			},
			failure: function (batch, action) {
				myMask.hide();
				var reader = batch.proxy.getReader();
				Ext.Msg.alert('Fallo', reader.jsonData ? reader.jsonData.message : '¡Algo anda mal!');
			},
			scope: this,
		});
	},
	deleteContact(button) {
		var grid = this.getContactGrid();
		var records = grid.getSelectionModel().getSelection();
		var store = this.getStoreStore();
		var title = 'Eliminar ' + records.length + ' Contactos';
		var msg = '¿Estás seguro de que deseas eliminar los ' + records.length + ' contactos seleccionados?';

		if (records.length > 1) {
			Ext.Msg.show({
				title,
                                msg,
				buttons: Ext.Msg.YESNOCANCEL,
				icon: Ext.MessageBox.QUESTION,
				scope: this,
				width: 500,
				fn: function(btn) {
					if (btn == 'yes') {
						var myMask = new Ext.LoadMask(Ext.getBody(), { msg:"Por favor, espere..." });
						myMask.show();
						store.remove(records);
						this.getStoreStore().sync({
							success: function (batch, action) {
								myMask.hide();
								
								this.getStoreStore().load();
								var reader = batch.proxy.getReader();
								Ext.Msg.alert('Hecho', reader.jsonData.message );
							},
							failure: function (batch, action) {
								myMask.hide();
								var reader = batch.proxy.getReader();
								Ext.Msg.alert('Fallo', reader.jsonData ? reader.jsonData.message : '¡Algo anda mal!');
							},
							scope: this,
						});
					}
				},
			});
		}
		
		else {
          		  Ext.Msg.alert('¡AVISO!', '<strong>Seleccione 2 o mas Contactos</strong>' );
                }
		
	},
});
