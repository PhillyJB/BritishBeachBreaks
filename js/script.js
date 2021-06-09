//Google maps JS to render our Google Maps onto the page:
// Initialize and add the map
function initMap() {
    // The location of London
    var london = { lat: 51.509865, lng: -0.118092};
    // The map, centered at London
    var googleMap = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 5,
        center: london,
    });
    // The marker, positioned at London
    var londonMarker = new google.maps.Marker({
        position: london,
        map: googleMap,
        /*this value is googleMap as in the variable defined above*/
    });
}

//JS to hide and toggle on beach information
$(".card-text").hide();
$(".more-info").click(function(){
    let onlyToggleThisText = "." + this.id + "-text";
    $(onlyToggleThisText).slideToggle();
});