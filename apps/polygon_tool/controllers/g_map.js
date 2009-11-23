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
    this.get("mapView").initMap();
    this.updatePlacemarks();
  },

  // [lat1, lon1, lat2, lon2]
  mapBounds: [1, 2, 3, 4],

  mapView: function () {
    return PolygonTool.mainPage.mainPane.mapView;
  }.property().cacheable(),

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
  },

  pointsDidChange: function () {
    if (this.get("mapView") && this.get("mapView").mapObject) {
      this.updatePlacemarks();
    }
  }.observes("*points.[]"),

  updatePlacemarks: function () {
    var points = this.get("points");
    // This is clearly overkill. We're removing all overlays on each update.
    this.get("mapView").get("mapObject").clearOverlays();
    points.forEach(function (item, index, enumerable) {
      this.get("mapView").addPlacemark(item);
    }, this);
  }

}) ;
