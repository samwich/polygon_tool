// ==========================================================================
// Project:   PolygonTool.gMapController
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals PolygonTool */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
PolygonTool.gMapController = SC.Object.create(
/** @scope PolygonTool.gMapController.prototype */ {

  initMap: function () {
    this.mapView().initMap();
  },

  mapView: function () {
    return PolygonTool.mainPage.mainPane.mapView;
  }

}) ;
