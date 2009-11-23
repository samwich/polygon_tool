// ==========================================================================
// Project:   PolygonTool.MapPointsView
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals PolygonTool */

/** @class

  (Document Your View Here)

  @extends SC.Object
*/
PolygonTool.MapPointsView = SC.Object.extend(
/** @scope PolygonTool.MapPointsView.prototype */ {
  // content: null,
  // contentBindingDefault: SC.Binding.multiple(),
  contentBinding: 'PolygonTool.gMapController.points',

  exampleView: PolygonTool.MapPointItemView,

  contentIndexesInRect: function(rect) {
    return SC.IndexSet.create(0, this.get('length'));
  },

  // contentRangeDidChange: function(content, object, key, indexes) {

  contentPropertyDidChange: function(target, key, indexes) {
    // Default Does Nothing
  },

  reloadIfNeeded: function() {
    // remove all exampleViews
    self.get("content").forEach(function (item, index, enumerable) {
      console.log("deleting" + item.get("latitude"));
    },
    self);
    // create an exampleView for each item in content
    // get the list of items in content
    // iterate through items
    // create a new mapPointItemView for each item
  }

});
