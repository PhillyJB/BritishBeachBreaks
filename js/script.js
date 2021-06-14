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
        {lat: 53.0859, lng: -4.3370},
        {lat: 53.3508, lng: -3.3727},
        {lat: 51.5724, lng: -4.2898},
        {lat: 53.3256, lng: -3.4880},
        {lat: 53.3602, lng: -4.2622},
        {lat: 56.0538, lng: -3.2864},
        {lat: 57.8397, lng: -7.0151},
        {lat: 57.8645, lng: -6.9805},
        {lat: 57.9952, lng: -7.0941},
        {lat: 57.8935, lng: -6.9535},
        {lat: 56.0639, lng: -2.7800},
        {lat: 55.1679, lng: -6.7862},
        {lat: 54.8988, lng: -5.8583},
        {lat: 53.9798, lng: -6.1528},
        {lat: 55.1678, lng: -6.8180},
        {lat: 55.1703, lng: -6.7374},
        {lat: 54.2413, lng: -5.8315}

    ];
   
    /*Coordinations in locations array above are in order of top to bottom- north-eng, south-eng, wales, scotland, ireland respectively with each one having 6 locations */

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath:'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

//JS to hide beach information
$(".card-text").hide();

//JS to toggle beach information via the "more info" button
$(".more-info").click(function(){
    let onlyToggleThisText = "." + this.id + "-text";
    $(onlyToggleThisText).slideToggle();
    
    //if-else statement to change the wording within the button from "more info" to "less info" vice versa
    let $this = $(this);
    $this.toggleClass("more-info");
    if($this.hasClass("more-info")){
        $this.text("More Info");
    } else {
        $this.text("Less Info");
    }
});

//JS to change apperance of region button on homepage during hover
$(".btn-primary").mouseenter(function(){
    $(this).css("background-color", "red");
});
$(".btn-primary").mouseleave(function(){
    $(this).css("background-color", "#0275d8");
});

$("#submit-alert").click(function(){
    alert("Your Message has been submitted. Thank You");
});