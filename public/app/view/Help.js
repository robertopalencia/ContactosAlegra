Ext.define('Alegra.view.Help', {
	
  extend: 'Ext.window.Window',
  alias : 'widget.contactHelp',
  requires: ['Ext.form.Panel','Ext.form.FieldSet'],
  title : '<strong>AYUDA</strong>',
  layout: 'fit',
  autoShow: true,
  width:'full',
  icon: 'https://cdn1.alegra.com/images/icons/help.png',
  itemId: 'Help',
	align:'center',
	x:0,
	y:400,
	
  initComponent: function() {
    this.items = [{
      				xtype: 'form',
                    border: true,
                    style: 'background-color: #fff;',
                    columnWidth: 1,
		            layout: 'column',
				    items:	[
                            {
                            columnWidth: 0.33,
                            html: '<div id="ayuda" class="box"><h4>Ayudas paso a paso</h4><ul class="vineta"><li><a href="http://ayuda.alegra.com/hc/es/articles/205798409-C%C3%B3mo-hacer-una-Factura-de-venta-" class="initWalkthru" data-walktrhu-name="createInvoice" data-walkthru-id="17946" target="_blank">Cómo crear una factura de venta</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/206509365--C%C3%B3mo-crear-una-Factura-de-Proveedor-" class="initWalkthru" data-walktrhu-name="createBill" data-walkthru-id="18401" target="_blank">Cómo crear una factura de proveedor</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/206509615--C%C3%B3mo-importar-contactos-" class="initWalkthru" data-walktrhu-name="createClient" data-walkthru-id="18066" target="_blank">Cómo importar contactos</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/206512955--C%C3%B3mo-crear-un-Banco-" class="initWalkthru" data-walktrhu-name="createAccount" data-walkthru-id="18065" target="_blank">Cómo crear una cuenta de Banco</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/206509105-Agregar-un-pago-a-una-factura" class="initWalkthru" data-walktrhu-name="createInvoicePayment" data-walkthru-id="18475" target="_blank">Cómo registrar un pago a una factura de venta</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/205798349--C%C3%B3mo-crear-una-Nota-Cr%C3%A9dito-" class="initWalkthru" data-walktrhu-name="createCreditNote" data-walkthru-id="18116" target="_blank">Cómo crear una nota crédito</a></li></ul></div>'
                            },
                            {   
                            columnWidth: 0.33,
                            html: '<div id="support" class="box"><h4>Soporte</h4><ul><li id="support-link2">Contáctanos</li><li><a href="http://ayuda.alegra.com/hc/es" target="_blank">Centro de ayuda</a></li><li><a href="http://www.alegra.com/manual.pdf" target="_blank">Manual de primeros pasos en Alegra</a></li><li><a href="http://www.alegra.com/acrecer-con-alegra" target="_blank">Plan de referidos</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/205761789-Caso-de-%C3%A9xito" target="_blank">Comparte tu historia</a></li></ul></div>'
                            },
                            {
                            columnWidth: 0.33,
                            html: '<div id="masAyudas" class="box"><h4>Contactos</h4><ul><li><a href="http://ayuda.alegra.com/hc/es/articles/206509595--C%C3%B3mo-crear-un-cliente-y-o-proveedor-" target="_blank">¿Cómo crear un Cliente?</a></li><li><a href="http://ayuda.alegra.com/hc/es/articles/206509615--C%C3%B3mo-importar-contactos-" target="_blank">¿Cómo importar contactos?</a></li></ul></div>'
                            }
                    ]
		
      				
      
    }];
    
    this.callParent(arguments);
  },
});
