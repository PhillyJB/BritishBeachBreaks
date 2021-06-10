//Google maps JS to render our Google Maps onto the page:
// Initialize and add the map
function initMap() {
    var map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 4.8,
        center: { lat: 54.9783, lng: 1.6178}
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [ 
        {lat: 55.6069, lng: -1.6944},
        {lat: 53.7875, lng: -3.0533},
        {lat: 53.5639, lng: -3.1003},
        {lat: 54.4903, lng: -3.6062},
        {lat: 53.3723, lng: -3.1902},
        {lat: 54.4911, lng: -0.6162},
        {lat: 50.81908813978726, lng: -0.13468596939164174},
        {lat: 50.93327107398637, lng: 0.7960591728310707},
        {lat: 50.784298661889885, lng: -1.3547245576759253},
        {lat: 50.68774116593416, lng: -1.9380745241821442},
        {lat: 50.079988031205026, lng: -5.696286117502836},
        {lat: 51.532304561152664, lng: 0.8038574156504701},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},

    ];
   
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath:'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

//JS to hide and toggle on beach information
$(".card-text").hide();
$(".more-info").click(function(){
    let onlyToggleThisText = "." + this.id + "-text";
    $(onlyToggleThisText).slideToggle();
});