Ext.define('Alegra.controller.Controller', {
	extend: 'Ext.app.Controller',
	stores: ['Store'],
	models: ['Model'],
	views: ['Form', 'Grid', 'Show', 'Form2'],
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
				click: this.EditContact,
			},
			
			'contactGrid dataview': {
				itemdblclick: this.EditContact,
			},
			
			'contactForm button[action=save]': {
				click: this.AddEditContact,
			},
			
			'contactGrid button[action=delete]': {
				click: this.destroyContact,
			},
			
		});
	},
	
	EditContact(grid, record) {
		let editar = Ext.create('Alegra.view.Form2').show();
        
		// Si se edita un record.
		if (record.stores != null) {
			editar.down('form').loadRecord(record);
		}
	},
	AddEditContact(button) {
		let win = button.up('window');
		let form   = win.down('form');
		let record = form.getRecord();
		let values = form.getValues();
		let add = false;
		let msg = 'Contacto actualizado exitosamente';

		if (values.id > 0) {
			record.set(values);
		} else {
			record = Ext.create('Alegra.model.Model');
			record.set(values);
			this.getStoreStore().add(record);
			add = true;
			msg = 'Contacto creado exitosamente';
		}

		let myMask = new Ext.LoadMask(Ext.getBody(), { msg:"Por favor, espere..." });
		myMask.show();
		this.getStoreStore().sync({
			success: function (batch, action) {
				myMask.hide();
				// Cargar de nuevo el store.
				if (add){
					this.getStoreStore().load();
				}
				let reader = batch.proxy.getReader();
				Ext.Msg.alert('Hecho', msg);
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
                title,
                msg,
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
								// Cargar de nuevo el store.
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
