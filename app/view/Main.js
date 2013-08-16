Ext.define('DueList.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'DueList.view.HeaderBar',
        'DueList.view.DueList',
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
            	xtype: 'duelist'
            }
        ]
    }
});
