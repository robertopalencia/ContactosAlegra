var selmodel = Ext.create('Ext.selection.CheckboxModel');

Ext.define('Alegra.view.Grid', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.contactGrid',
  requires: ['Ext.toolbar.Paging'],
	
  title: '<div class="zopim" __jx__id="___$_61 ___$_61" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; padding: 0px; border: 0px; background: transparent; overflow: hidden; position: fixed; z-index: 16000002; width: 187px; height: 30px; right: 10px; bottom: 0px; display: none;"><iframe frameborder="0" src="about:blank" style="background-color: transparent; vertical-align: text-bottom; position: relative; width: 100%; height: 100%; min-width: 100%; min-height: 100%; max-width: 100%; max-height: 100%; margin: 0px; overflow: hidden; display: block;"></iframe></div><div class="zopim" __jx__id="___$_4 ___$_4" style="margin-top: 0px; margin-right: 0px; margin-bottom: 0px; padding: 0px; border: 0px; background: transparent; overflow: hidden; position: fixed; z-index: 16000001; right: 10px; bottom: 0px; border-top-left-radius: 5px; border-top-right-radius: 5px; display: none; width: 290px; height: 400px; box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 3px 2px;"><iframe frameborder="0" src="about:blank" style="background-color: transparent; vertical-align: text-bottom; position: relative; width: 100%; height: 100%; min-width: 100%; min-height: 100%; max-width: 100%; max-height: 100%; margin: 0px; overflow: hidden; display: block;"></iframe></div><noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KQG46G"height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript><div class="main-container"><div style=" " class="header-wrapper"><div id="membership-notifications-wrapper" class="trial" data-user="72411"><div class="membership-notification priority-low"><div class="header"><strong>ESTAMOS PRESENTANDO PROBLEMAS CON EL HOSTING, POR FAVOR VUELVA A CARGAR LA PAGINA (F5) EN CASO QUE NO CONECTE CON LA API</strong><div class="title"></div></div><div class="footer"></div></div></div><div id="hints-wrapper-top"> </div><header style=""><div class="logo" style="float:left; margin-top: 15px; margin-left:7px; margin-bottom: 3px;"><a href="#"><img src="https://cdn1.alegra.com/images/logo_alegra.png" style="width: 178px"></a> <a id="change-logo-link" class="change-logo" href="#">Utilizar mi logo</a></div><div id="search" class="search-input" style="float:left; margin-left: 86px; margin-top: 23px;"> <table class="x-field x-table-plain x-form-item x-field-default" cellpadding="0" id="combobox-1034" style="table-layout: fixed;"><tbody> <tr id="combobox-1034-inputRow"><td id="combobox-1034-labelCell" style="display:none;" valign="top" halign="left" width="105" class="x-field-label-cell"><label id="combobox-1034-labelEl" for="combobox-1034-inputEl" class="x-form-item-label x-unselectable x-form-item-label-left" style="width:100px;margin-right:5px;" unselectable="on"></label></td><td class="x-form-item-body " id="combobox-1034-bodyEl" colspan="3" role="presentation" style="width: 150px;"> <table id="combobox-1034-triggerWrap" class="x-form-trigger-wrap" cellpadding="0" cellspacing="0" style="width: 150px; table-layout: fixed;"><tbody><tr> <td id="combobox-1034-inputCell" class="x-form-trigger-input-cell" style="width: 100%;"><div class="x-hide-display x-form-data-hidden" role="presentation" id="ext-gen1077"></div><input id="combobox-1034-inputEl" type="text" class="x-form-field x-form-empty-field x-form-text " autocomplete="off" name="combobox-1034-inputEl" placeholder="Buscar..." aria-invalid="false" style="width: 100%;"></td><td valign="top" class=" x-trigger-cell x-unselectable" style="width:17px;display:none;" id="ext-gen1076"> <div class="x-trigger-index-0 x-form-trigger x-form-arrow-trigger x-form-trigger-first" role="button" id="ext-gen1075"></div></td></tr></tbody></table></td></tr></tbody></table></div><ul class="user-menu"><li class="help"><a href="http://ayuda.alegra.com/hc/es" target="_blank">Ayuda</a></li><li class="support" id="support-link"><a href="#">Soporte</a></li><li class="user"><a href="#" title="robertojosepalencia@gmail.com - PalenciaWeb"> robertojosepalencia@gmail...</a></li><li class="configuration"><a href="#">Configuración</a></li><li class="logout"><a href="#">Salir</a></li></ul></header><div id="app-contact-phone" style="height: 9px; width: 1024px; margin: 0 auto; position: relative; top: -23px; display: none;"><div id="containerMx" style="border: 2px solid rgb(0, 190, 167); border-radius: 5px; padding: 0px 22px; float: right; background-color: rgb(0, 190, 167); color: white; margin-bottom: -17px;"><p style="font-size: 12px; margin: 4px 0px;">Solicita ayuda al <address style="display: inline-block;">(+57) 1 508 8239</address></p></div> </div><nav style="position: relative;">div style="width:1024px; margin: 0 auto"> <ul id="nav1" class="primary"><li class=""><a href="#">Inicio</a></li><li class=" hasSubmenu "><a href="#">Ingresos</a><ul class="secondary"><li><a href="#">Cuentas de cobro</a></li><li><a href="#">Cuentas de cobro recurrentes</a></li><li><a href="#">Pagos recibidos</a></li><li><a href="#">Notas crédito</a></li><li><a href="#">Cotizaciones</a></li><li><a href="#">Remisiones</a></li><li><a href="#">POS</a></li></ul></li><li class=" hasSubmenu "><a href="#">Gastos</a><ul class="secondary"> <li><a href="#">Pagos</a></li><li><a href="#">Facturas de proveedores</a></li><li><a href="#">Pagos  Recurrentes</a></li><li><a href="#">Notas débito</a></li><li><a href="#">Órdenes de compra</a></li> </ul></li><li class=" active active hasSubmenu "><a href="#">Contactos</a><ul class="secondary"><li class="active"><a href="#">Todos</a></li><li><a href="#">Clientes</a></li><li><a href="#">Proveedores</a></li> </ul></li><li class=" hasSubmenu "> <a href="#">Inventario</a><ul class="secondary"> <li><a href="#">Items de venta</a></li> <li><a href="#">Valor de Inventario</a></li><li><a href="#">Ajustes a Inventario</a></li><li><a href="#">Gestión de Items</a></li><li><a href="#">Listas de precios</a></li> <li><a href="#">Bodegas</a></li></ul></li> <li class=" hasSubmenu "><a href="#">Bancos</a><ul class="secondary"></ul> </li><li class=" hasSubmenu "> <a href="#">Categorías</a> <ul class="secondary"><li><a href="#">Categorías</a></li><li><a href="#">Ajustes de Categorías</a></li></ul></li><li class=""><a class="menu-small" href="#">Reportes</a></li><li id="quick-add-button-holder"><div class="x-btn menu-button x-unselectable x-btn-default-medium x-icon-text-left x-btn-icon-text-left x-btn-default-medium-icon-text-left" style="border-width:1px;width:130px;height:48px;" id="splitbutton-1018"><div id="splitbutton-1018-btnWrap" class="x-btn-wrap x-btn-split x-btn-split-right" unselectable="on" style="height: 41px;"><a id="splitbutton-1018-btnEl" class="x-btn-button" role="button" hidefocus="on" unselectable="on" tabindex="0" style="height: 41px;"><span id="splitbutton-1018-btnInnerEl" class="x-btn-inner x-btn-inner-center" unselectable="on" style="line-height: 41px;">Nuevo</span><span role="img" id="splitbutton-1018-btnIconEl" class="x-btn-icon-el icon-add " unselectable="on" style="">&nbsp;</span></a></div></div></li></ul><div id="quick-add-button-holder"></div></div></nav></div><div id="notification-wrapper"></div><br></br><br></br>',
	
  selModel:selmodel,
  store: 'Store',
  stripeRows: true,
  columnLines: true,
  id: 'contactGrid',
  columns: [{
    header: 'Nombre',
    flex: 2,
    dataIndex: 'name',
    align: 'center',
    menuDisabled: true,
  }, {
    header: 'Identificación',
    flex:1,
    dataIndex: 'identification',
    align: 'center',
    menuDisabled: true,
  }, {
    header: 'Teléfono 1',
    flex:1,
    dataIndex: 'phonePrimary',
    align: 'center',
    menuDisabled: true,
  }, {
    header: 'Observaciones',
    flex:1,
    dataIndex: 'observations',
    align: 'center',
    menuDisabled: true,
  }, {
    xtype: 'actioncolumn',
    text: 'Acciones',
    align: 'center',
    flex:1,
    menuDisabled: true,
    items: [
      {
        icon   : 'https://cdn1.alegra.com/images/icons/zoom.png',
        tooltip: 'Visualizar',
        handler: function(grid, rowIndex, colIndex, item, e, record, row) {
          
          var rec = grid.getStore().getAt(rowIndex);
          var formShow = Ext.create('Alegra.view.Show').show();
          formShow.down('form').loadRecord(rec);
        },
      }, {
        icon   : 'https://cdn1.alegra.com/images/icons/page_edit.png',
        tooltip: 'Editar',
        handler: function(grid, rowIndex, colIndex) {
          var rec = grid.getStore().getAt(rowIndex);
          var formEdit = Ext.create('Alegra.view.Edit').show();
          
          if (rec.stores != null) {
            formEdit.down('form').loadRecord(rec);
          }
        },
      }, {
        icon   : 'https://cdn1.alegra.com/images/icons/delete.png',
        tooltip: 'Eliminar',
        handler: function(grid, rowIndex, colIndex) {
          var rec = grid.getStore().getAt(rowIndex);
          var store = grid.getStore();
      		Ext.Msg.show({
      			title: 'Eliminar Contacto',
      			msg: '¿Estás seguro de que deseas eliminar el contacto?',
      			buttons: Ext.Msg.YESNOCANCEL,
      			icon: Ext.MessageBox.QUESTION,
    				scope: this,
      			width: 400,
      			fn: function(btn) {
      				if (btn == 'yes') {
                var myMask = new Ext.LoadMask(Ext.getBody(), { msg:"Por favor, espere..." });
    						myMask.show();
      					store.remove(rec);
      					store.sync({
      						success: function (batch, action) {
      							myMask.hide();
      							
      							store.load();
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
      			}
      		});
        },
      },
    ],
  }],
  initComponent: function() {
    
    this.dockedItems = [{
      xtype: 'toolbar',
      items: [{
        
        text: 'Agregar Nuevo Contacto',
        icon:'https://cdn1.alegra.com/images/icons/add.png',
        action: 'add',
      },{
        
        text: 'Eliminar Seleccionados',
        icon   : 'https://cdn1.alegra.com/images/icons/delete.png',
        action: 'delete',
		  
      }, 
             ],
    },
                        {
      xtype: 'toolbar',
      dock:'bottom',
      items: [{						
	text: '<strong><h1>AYUDA</h1></strong>',
        icon   : 'https://cdn1.alegra.com/images/icons/help.png',
        handler: function(){
				Ext.create('Alegra.view.Help').Show();
	}
       }],		
    },              
    {
      xtype: 'pagingtoolbar',
      dock: 'bottom',
      store: 'Store',
      displayInfo: true,
      displayMsg: 'Mostrando {0} - {1} de {2}',
      emptyMsg: "Sin datos para mostrar",
      params : {
            start : 0,
            limit : 80,
            getall:true,
            profile:true,
            blogid:3
        }
    }];
    this.callParent(arguments);
  }
});




