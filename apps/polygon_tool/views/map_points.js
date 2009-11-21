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
  // contentBindingDefault: SC.Binding.multiple()
  contentBinding: 'PolygonTool.gMapController.points'

});
