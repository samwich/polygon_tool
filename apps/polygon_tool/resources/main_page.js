// ==========================================================================
// Project:   PolygonTool - mainPage
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals PolygonTool */

// This page describes the main user interface for your application.  
PolygonTool.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'mapPane topView listView editView'.w(),
    
    topView: SC.ToolbarView.design({
      layout: { top: 0, left: 0, right: 0, height: 36 },
      childViews: 'labelView'.w(),
      anchorLocation: SC.ANCHOR_TOP,
      
      labelView: SC.LabelView.design({
        layout: { centerY: 0, height: 24, left: 8, width: 200 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        value: "Polygon Tool"
      })
    }),
    
    mapPane: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      hasVerticalScroller: NO,
      layout: { top: 36, bottom: 0,left: 200, right: 0 },
      backgroundColor: 'gray'
    }),

    listView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      // layout: { top: 36, left: 0, width: 200 },
      layout: { top: 36, left: 0 },

      contentView: SC.ListView.design({
        contentBinding: 'PolygonTool.pointsController.arrangedObjects',
        selectionBinding: 'PolygonTool.pointsController.selection',
        contentValueKey: "summary"
      })
    }),
    
    editView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      hasVerticalScroller: NO,
      layout: { bottom: 0, height: 200, width: 200 },
      backgroundColor: 'white'
    })

    
  })

});
