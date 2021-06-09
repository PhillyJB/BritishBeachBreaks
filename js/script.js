//Google maps JS to render our Google Maps onto the page:
// Initialize and add the map
function initMap() { 
    // The location of London
    var newcastle = { lat: 54.9783, lng: 1.6178};
    
    // The map, centered at London
    var googleMap = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 4.8,
        center: newcastle,
    });
    
    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
            {lat: 55.6090, lng: 1.7099},
            {lat: 53.7875, lng: -3.0533},
            {lat: 53.5639, lng: 3.1003},
            {lat: 54.4903, lng: 3.6062},
            {lat: 53.3723, lng: 3.1902},
            {lat: 54.4911, lng: 0.6162},
    ];

    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });

    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath:
          "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
      });

}

//JS to hide and toggle on beach information
$(".card-text").hide();
$(".more-info").click(function(){
    let onlyToggleThisText = "." + this.id + "-text";
    $(onlyToggleThisText).slideToggle();
});