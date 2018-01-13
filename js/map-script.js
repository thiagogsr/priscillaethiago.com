'use strict';

// CHECK WINDOW RESIZE
var is_windowresize = false;
$(window).resize(function() {
  is_windowresize = true;
});


//INITIALIZE MAP
function initialize() {

  //DEFINE MAP OPTIONS
  //=======================================================================================
  var mapOptions = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: new google.maps.LatLng(-11.029998,-37.101858),
    panControl: true,
    zoomControl: true,
    mapTypeControl: true,
    //scaleControl: false,
    streetViewControl: true,
    overviewMapControl: true,
    //rotateControl:true,

  };

  //CREATE NEW MAP
  //=======================================================================================
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  //ADD NEW MARKER WITH LABEL
  //=======================================================================================
  var marker1 = new MarkerWithLabel({
    position: new google.maps.LatLng(-11.029998,-37.101858),
    draggable: false,
    raiseOnDrag: false,
    icon: ' ',
    map: map,
    labelContent: '<div class="de-icon circle medium-size" style="background-color:#FFF; border:1px solid #fb7fa2"><i class="de-icon-heart" style="color:#fb7fa2"></i></div>',
    labelAnchor: new google.maps.Point(29, 20),
    labelClass: "labels" // the CSS class for the label
  });


  //INFO WINDOWS
  //=======================================================================================
  var infowindow = new google.maps.InfoWindow({
    content: '<div>VILLAVERDE ESPAÇO FESTAS</DIV>'
  });

  //OPEN INFO WINDOWS ON LOAD
  //=======================================================================================
  infowindow.open(map, marker1);

  //ON CLICK MARKER, OPEN INFO WINDOWS
  //=======================================================================================
  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });


  //ON BOUND EVENTS AND WINDOW RESIZE
  //=======================================================================================
  google.maps.event.addListener(map, 'bounds_changed', function() {
    if (is_windowresize) {
      //map.setCenter(marker.getPosition());
      window.setTimeout(function() {
        map.panTo(marker1.getPosition());
      }, 500);
    }
    is_windowresize = false;
  });
}

// LOAD GMAP
google.maps.event.addDomListener(window, 'load', initialize);
