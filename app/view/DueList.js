Ext.define('DueList.view.DueList', {
    extend: 'Ext.dataview.List',
    xtype: 'duelist',
    
    config: {
    	flex: 1,
		data: [
		       {name: 'Item 1', date: '09/01/2013', is_completed: false}
		],
		
		itemTpl: document.getElementById('tpl_due_list_item').innerHTML
	}
});