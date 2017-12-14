Ext.define('Alegra.store.Store', {
  extend: 'Ext.data.Store',
  model: 'Alegra.model.Model',
  autoLoad: true,
  leadingBufferZone: 10,
	pageSize: 20,
  autoLoad: { start: 0, limit: 20 },
  proxy: {
    type: 'ajax',
    api: {
      create: 'main/create',
      read: 'main/index',
      update: 'main/update',
      destroy: 'main/delete',
    },
    actionMethods: {
      create: 'POST',
      read: 'GET',
      update: 'POST',
      destroy: 'POST',
    },
    reader: {
      type: 'json',
      root: 'data',
      successProperty: 'success',
    },
    writer: {
      type: 'json',
      writeAllFields: true,
      encode: true,
      root: 'data',
    },
  },
});
