Ext.define('DueList.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'DueList.view.HeaderBar',
        'Ext.dataview.List',
        'Ext.data.Store'
    ],
    config: {
        fullscreen: true,
        layout: 'fit',

        items: [
            {
            	docked: 'top',
            	xtype: 'headerbar'
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
