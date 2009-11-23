// ==========================================================================
// Project:   PolygonTool.pointsController
// Copyright: ©2009 Samuel Johnson
// ==========================================================================
/*globals PolygonTool */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
PolygonTool.pointsController = SC.ArrayController.create(
/** @scope PolygonTool.pointsController.prototype */ {

  mapBoundsBinding: "PolygonTool.gMapController.",

  visiblePoints: function () {
    return this.get("points");
  }.property()

}) ;
