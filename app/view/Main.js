Ext.define('DueList.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.Toolbar',
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        fullscreen: true,
        layout: 'fit',

        items: [
            {
            	docked: 'top',
            	xtype: 'toolbar',
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
            },
            {
            	xtype: 'list',
            	flex: 1,
        		data: [
        		       {name: 'Item 1', date: '09/01/2013', is_completed: false}
        		],
            	itemTpl: '{name}'
            }
        ]
    }
});
