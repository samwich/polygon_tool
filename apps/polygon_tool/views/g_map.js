// ==========================================================================
// Project:   PolygonTool.GMapView
// Copyright: ©2009 Samuel Johnson
// ==========================================================================
/*globals PolygonTool GBrowserIsCompatible GEvent GLatLng GMap2 */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
// maybe should be called GMapContainerView
PolygonTool.GMapView = SC.View.extend(
/** @scope PolygonTool.GMapView.prototype */ {

  // didCreateLayer: function () {
  //   this.initMap();
  // },

  initMap: function () {
    var mapCanvasId = this.get("layerId");

    // initialize the map
    if (GBrowserIsCompatible()) {
      var map = new GMap2(document.getElementById(mapCanvasId));
      this.set("mapObject", map);
      this.setCenterToSFBay();
      this.setUIToDefault();
      var mapView = this;
      GEvent.addListener(map, "click", function (overlay, gLatLng) {
        // this this may be the map object and not the map view
        mapView.gMapClickDidOccur(overlay, gLatLng);
      });
    }
  },

  setCenterToSFBay: function () {
    this.setCenter(37.79, -122.35, 11);
  },

  setCenter: function (latitude, longitude, zoom) {
    var point = new GLatLng(latitude, longitude);
    this.get("mapObject").setCenter(point, zoom);
  },

  setUIToDefault: function () {
    this.get("mapObject").setUIToDefault();
  },

  gMapClickDidOccur: function (context, gLatLng) {
    // ignore clicks on overlays. we'll (probably) let the overlay handle its events
    if (context) {
      this.mapClickDidOccurWithOverlay(context);
    } else {
      this.mapClickDidOccurWithoutOverlay(gLatLng);
    }
  },

  mapClickDidOccurWithOverlay: function (overlay) {
    PolygonTool.gMapController.mapClickDidOccurWithOverlay(overlay);
  },

  mapClickDidOccurWithoutOverlay: function (gLatLng) {
    PolygonTool.gMapController.mapClickDidOccurWithoutOverlay(gLatLng);
  }

});
