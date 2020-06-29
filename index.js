$(".carousel").carousel({
  interval: 3000,
});

var map;
function initialize() {
  var map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(37.4419, -122.1419),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });
}
google.maps.event.addDomListener(window, "load", initialize);
