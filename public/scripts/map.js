var mymap = L.map('mapid').setView([40.2224765, -85.4329497], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZHN0ZWVsZTIwMTQiLCJhIjoiY2phdHY3ejRtMXp2YjJ4bWlpdXRidGZpNSJ9.gdQdIvN_1N0mlrCFnwjLCw',
}).addTo(mymap);

var myMovingMarker = L.Marker.movingMarker([[40.2224765, -85.4329497],[40.2324765, -85.4439497]],[20000]).addTo(mymap);

myMovingMarker.start();

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

L.Routing.control({
    waypoints: [
        L.latLng(40.2224765, -85.4329497),
        L.latLng(40.2324765, -85.4439497)
    ],
    router: L.Routing.mapbox('pk.eyJ1IjoiZHN0ZWVsZTIwMTQiLCJhIjoiY2phdHY3ejRtMXp2YjJ4bWlpdXRidGZpNSJ9.gdQdIvN_1N0mlrCFnwjLCw'),
}).addTo(mymap);

