$(function() {

  var socket = io();

  $("#modal-button").trigger("click");

  $("#menu-toggle").on("click", function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $('#menu-toggle span').toggleClass("glyphicon-chevron-right").toggleClass("glyphicon-chevron-left");
    resetMap(panorama);
  });

  $("#drive-around").on("click", function(e) {
    e.preventDefault();
    $('#drive-around span').toggleClass("glyphicon-road").toggleClass("glyphicon-eye-open");
    $("#map").toggle().toggleClass('half-left');
    $("streetview").toggleClass('half-right');
    $("#get-directions-modal").toggle();
    $("#bus-routes-modal").toggle();
    $("#directions-panel").empty();
    $("#all-hyperlapse").hide();
    // Hides bus route info if present
    $('#bus-route-info-box').hide();
    google.maps.event.trigger(panorama, "resize");
    google.maps.event.trigger(map, "resize");
  });

  $("#bus-routes-modal").on("click", function(e) {
    e.preventDefault();
    // Clears directions and hyperlapse divs
    $("#directions-panel").empty();
    $("#all-hyperlapse").hide();
  });

  $("#location-modal").on("click", function(e) {
    e.preventDefault();
    $("#directions-panel").empty();
    $("#all-hyperlapse").hide();
  })

});


// This thing causes errors, but it seems to fix our issue
function resetMap(m) {
   x = m.getZoom();
   c = m.getCenter();
   google.maps.event.trigger(m, 'resize');
   m.setZoom(x);
   m.setCenter(c);
};
