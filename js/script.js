//Google maps JS to render our Google Maps onto the page:
// Initialize and add the map
function initMap() {
    var map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 4.8,
        center: { lat: 54.4697, lng: -5.0689}
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [ 
        {lat: 55.6069, lng: -1.6944},
        {lat: 53.7875, lng: -3.0533},
        {lat: 53.5639, lng: -3.1003},
        {lat: 54.4903, lng: -3.6062},
        {lat: 53.3723, lng: -3.1902},
        {lat: 54.4911, lng: -0.6162},
        {lat: 50.8190, lng: -0.1346},
        {lat: 50.9332, lng: 0.7960},
        {lat: 50.7842, lng: -1.3547},
        {lat: 50.6877, lng: -1.9380},
        {lat: 50.0799, lng: -5.6962},
        {lat: 51.5323, lng: 0.8038},
        {lat: 51.6182, lng: -4.9041},
        {lat: 53.085936151543756, lng: -4.337059164103376},
        {lat: 53.350816567047055, lng: -3.3727443639037658},
        {lat: 51.5724505276232, lng: -4.289889844106617},
        {lat: 53.32563501153239, lng: -3.4880894450089586},
        {lat: 53.36022879544812, lng: -4.262260825074323},
        {lat: 56.05389858827605, lng: -3.2864015726215925},
        {lat: 57.83974270651248, lng: -7.015167169132039},
        {lat: 57.86450201819079, lng: -6.9805455303918915},
        {lat: 57.995283330376914, lng: -7.09417927521854},
        {lat: 57.89356178394004, lng: -6.95357077754699},
        {lat: 56.063983930161996, lng: -2.7800028306337743},
        {lat: 55.16793151052298, lng: -6.786291489291372},
        {lat: 54.898825164451374, lng: -5.858349850268546},
        {lat: 53.979874938119345, lng: -6.1528121442297214},
        {lat: 55.167872963031996, lng: -6.818057226149349},
        {lat: 55.17033731804413, lng: -6.737478382371597},
        {lat: 54.241349843119835, lng: -5.8315311850807925}

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