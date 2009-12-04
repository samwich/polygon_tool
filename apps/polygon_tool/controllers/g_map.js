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
    this.pointsDidChange();
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
    this.mapClick(latitude, longitude);
  },

  toolModeBinding: "PolygonTool.mainPage.mainPane.topView.toolChooserView.value",

  toolModeDidChange: function () {
    var toolMode = this.get("toolMode")
    if (toolMode == "select") {
      // change cursor to pointer
      this.mapClick = this.mapClickNoop;
      this.markerClick = null;
    } else if (toolMode == "point") {
      // change cursor to crosshairs for map, pointer for overlays
      this.mapClick = this.createPoint;
      this.markerClick = null; // add pointer to selection
    } else if (toolMode == "line") {
      // change cursor to drag-hand for map, pointer for overlays
      this.mapClick = this.mapClickNoop;
      this.markerClick = null; // this.addPointToLine()
    } else if (toolMode == "polygon") {
      // change cursor to drag-hand for map, pointer for overlays
      this.mapClick = this.mapClickNoop;
      this.markerClick = null; // this.addPointToPolygon()
    } else {
      // change cursor to X
      this.mapClick = this.mapClickNoop;
      this.markerClick = null;
    };
  }.observes("toolMode"),

  mapClick: function (latitude, longitude) {
    // alert("old mapClick");
  },

  markerClick: function () {},

  createPoint: function (latitude, longitude) {
    PolygonTool.store.createRecord(PolygonTool.Point, {
      "latitude": latitude,
      "longitude": longitude
    });
  },

  mapClickNoop: function (latitude, longitude) {
    // alert("mapClickNoop");
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
