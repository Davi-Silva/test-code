window.onload = getLocation;

let lat, long, msg;
msg = document.querySelector("#msg");

function getLocation(position) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Could not get the position: " + err);
    }
}

function showPosition(position) {
    let location = [position.coords.latitude, position.coords.longitude];
    let lat = "Latitude: " + position.coords.latitude;
    let long = "Longitude: " + position.coords.longitude;
    msg.innerHTML = lat + "<br>" + long;
}

// Google Maps geo location API
// NOT WORKING YET
let centerPos = new google.maps.LatLng(-23.3812032, -51.917768099999996);
let mapDiv = document.querySelector("#map");

let optionsGMaps = {
    center: centerPos,
    navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL },
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 15
};

let map = new google.maps.Map(mapDiv, optionsGMaps);

if (navigator.geolocation) {
    // callback function, called by getCurrentPosition() in case of success
    function drawPosition(position) {
        let infopos = "Got position : <br>";
        infopos += "Latitude : " + position.coords.latitude + "<br>";
        infopos += "Longitude: " + position.coords.longitude + "<br>";
        infopos += "Altitude : " + position.coords.altitude + "<br>";
        document.getElementById("myposition").innerHTML = infopos;
        // Make new object LatLng for Google Maps
        let latlng = new google.maps.LatLng(position.coords.latitude,
            position.coords.longitude);
        // Add a marker at position
        let marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "You are here"
        });
        // center map on longitude and latitude
        map.panTo(latlng);
    }
    // callback function, called by getCurrentPosition() in case of error
    function errorPosition(error) {
        console.log("Unable to load Google Maps API");
    }
    navigator.geolocation.getCurrentPosition(drawPosition, errorPosition);
} else {
    alert("Geolocation API not supported by your browser");
}