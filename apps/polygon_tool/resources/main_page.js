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
    childViews: 'mapPane topView leftView'.w(),
    
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
      layout: { top: 36, bottom: 0, right: 0 },
      backgroundColor: 'white'
    }),
    
    leftView: SC.ScrollView.design({
      hasHorizontalScroller: NO,
      hasVerticalScroller: NO,
      layout: { left: 0, top: 36, bottom: 0, width: 200 },
      backgroundColor: "yellow",
      childViews: "listView editView".w(),
      
      listView: SC.ScrollView.design({
        hasHorizontalScroller: NO,
        // layout: { bottom: 200 },
        backgroundColor: 'green',
        // contentBinding: 'PolygonTool.pointsController.arrangedObjects',
        // selectionBinding: 'PolygonTool.pointsController.selection'
        rowHeight: 30
      }),
      
      editView: SC.ScrollView.design({
        hasHorizontalScroller: NO,
        hasVerticalScroller: NO,
        layout: { height: 200 },
        backgroundColor: 'blue'
      })
    })
    
  })

});
