Ext.define('DueList.view.HeaderBar', {
    extend: 'Ext.Toolbar',
    requires: ['Ext.Button', 'Ext.Title'],
    xtype: 'headerbar',
    
    config: {
		layout: {
			pack: 'end',
			type: 'hbox'
		},
		items: [
		        {
		        	xtype: 'title',
		        	title: 'Due List',
		        	docked: 'left'
		        },
		        {
		        	xtype: 'button',
		        	iconCls: 'refresh',
		        	ui: 'plain'
		        },
		        {
		        	xtype: 'button',
		        	iconCls: 'add',
		        	ui: 'plain'
		        },
		        {
		        	xtype: 'button',
		        	iconCls: 'trash',
		        	ui: 'plain'
		        },
		        {
		        	xtype: 'button',
		        	iconCls: 'more',
		        	ui: 'plain'
		        }
		]
    }
});