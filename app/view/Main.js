Ext.define('DueList.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.Toolbar',
    ],
    config: {
        fullscreen: true,

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
            	        	iconCls: 'refresh'
            	        },
            	        {
            	        	xtype: 'button',
            	        	iconCls: 'add'
            	        },
            	        {
            	        	xtype: 'button',
            	        	iconCls: 'delete'
            	        },
            	        {
            	        	xtype: 'button',
            	        	iconCls: 'more'
            	        }
            	]
            }
        ]
    }
});
