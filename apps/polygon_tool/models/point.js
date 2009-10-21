// ==========================================================================
// Project:   PolygonTool.Point
// Copyright: ©2009 Samuel Johnson
// ==========================================================================
/*globals PolygonTool */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
PolygonTool.Point = SC.Record.extend(
/** @scope PolygonTool.Point.prototype */ {

  latitude: SC.Record.attr(Number),
  longitude: SC.Record.attr(Number),

  summary: function () {
    return this.get("guid") + ": " + this.get("latitude") + ", " + this.get("longitude");
  }.property("latitude", "longitude").cacheable()

}) ;
