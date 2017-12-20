Ext.define('Alegra.controller.Controller', {
	extend: 'Ext.app.Controller',
	stores: ['Store'],
	models: ['Model'],
	views: ['Add', 'Edit', 'Grid', 'Show'],
	refs: [{
		ref: 'contactPanel',
		selector: 'panel',
	}, {
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
				click: this.destroyContact,
			},
			
		});
	},
	
	LoadAddContact(grid, record) {
		let agregar = Ext.create('Alegra.view.Add').show();
        
		
		if (record.stores != null) {
			agregar.down('form').loadRecord(record);
			
		}
	},
	AddContact(button) {
		let win = button.up('window');
		let form   = win.down('form');
		let record = form.getRecord();
		let values = form.getValues();
		record = Ext.create('Alegra.model.Model');
        record.set(values);
        this.getStoreStore().add(record);
        let myMask = new Ext.LoadMask(Ext.getBody(), { msg:"Por favor, espere..." });
		myMask.show();
		this.getStoreStore().sync({
			success: function (batch, action) {
				myMask.hide();
				this.getStoreStore().load();
				let reader = batch.proxy.getReader();
				Ext.Msg.alert('Hecho', 'Contacto Agregado exitosamente');
				win.close();
			},
			failure: function (batch, action) {
				myMask.hide();
				let reader = batch.proxy.getReader();
				Ext.Msg.alert('Fallo', reader.jsonData ? reader.jsonData.message : '¡Algo anda mal!');
			},
			scope: this,
		});
	},
	
	EditContact(button) {
		let win = button.up('window');
		let form   = win.down('form');
		let record = form.getRecord();
		let values = form.getValues();
		record.set(values);
		let myMask = new Ext.LoadMask(Ext.getBody(), { msg:"Por favor, espere..." });
		myMask.show();
		this.getStoreStore().sync({
			success: function (batch, action) {
				myMask.hide();
				let reader = batch.proxy.getReader();
				Ext.Msg.alert('Hecho', 'Contacto Editado Exitosamente');
				win.close();
			},
			failure: function (batch, action) {
				myMask.hide();
				let reader = batch.proxy.getReader();
				Ext.Msg.alert('Fallo', reader.jsonData ? reader.jsonData.message : '¡Algo anda mal!');
			},
			scope: this,
		});
	},
	destroyContact(button) {
		let grid = this.getContactGrid();
		let records = grid.getSelectionModel().getSelection();
		let store = this.getStoreStore();
		let title = records.length > 1 ? 'Eliminar ' + records.length + ' Contactos' : 'Eliminar Contacto';
		let msg = records.length > 1 ? '¿Estás seguro de que deseas eliminar los ' + records.length + ' contactos seleccionados? .' : '¿Estás seguro de que deseas eliminar el contacto seleccionado?';

		if (records.length > 0) {
			Ext.Msg.show({
				buttons: Ext.Msg.YESNOCANCEL,
				icon: Ext.MessageBox.QUESTION,
				scope: this,
				width: 500,
				fn: function(btn) {
					if (btn == 'yes') {
						let myMask = new Ext.LoadMask(Ext.getBody(), { msg:"Por favor, espere..." });
						myMask.show();
						store.remove(records);
						this.getStoreStore().sync({
							success: function (batch, action) {
								myMask.hide();
								
								this.getStoreStore().load();
								let reader = batch.proxy.getReader();
								Ext.Msg.alert('Hecho', reader.jsonData.message );
							},
							failure: function (batch, action) {
								myMask.hide();
								let reader = batch.proxy.getReader();
								Ext.Msg.alert('Fallo', reader.jsonData ? reader.jsonData.message : '¡Algo anda mal!');
							},
							scope: this,
						});
					}
				},
			});
		}
	},
});
