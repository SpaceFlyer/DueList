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
            	title: {
            		title: 'Due List',
            		style: {
            			'text-align': 'left'
            		}
            	},
            	items: [
            	]
            }
        ]
    }
});
