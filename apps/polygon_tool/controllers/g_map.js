// ==========================================================================
// Project:   PolygonTool.gMapController
// Copyright: ©2009 Samuel Johnson
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

  // [lat1, lon1, lat2, lon2]
  mapBounds: [1, 2, 3, 4],

  mapView: function () {
    return PolygonTool.mainPage.mainPane.mapView;
  },

  // The gMapView binds to these:
  pointsBinding: 'PolygonTool.pointsController.visiblePoints',
  lines: '',
  polygons: '',

  mapClickDidOccurWithoutOverlay: function (gLatLng) {
    var latitude = gLatLng.lat();
    var longitude = gLatLng.lng();
    var point = PolygonTool.store.createRecord(PolygonTool.Point, {
      "latitude": latitude,
      "longitude": longitude
    });
  },

  mapClickDidOccurWithOverlay: function (overlay) {
    // lookup the correct point/line/polygon object for the overlay
    // select the object
  }

}) ;
