let info = "";

info += "Browser Name: " + navigator.appName + "<br>";
info += "Browser Version: " + navigator.appVersion + "<br>";
info += "Platform (OS): " + navigator.platform + "<br>";

document.getElementById("output").innerHTML = info;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        document.getElementById("output").innerHTML +=
            "Latitude: " + position.coords.latitude + "<br>" +
            "Longitude: " + position.coords.longitude;
    });
} else {
    document.getElementById("output").innerHTML += "Geolocation not supported";
}