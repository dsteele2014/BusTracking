var map = L.map('mapid').setView([40.2224765, -85.4329497], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 15,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZHN0ZWVsZTIwMTQiLCJhIjoiY2phdHY3ejRtMXp2YjJ4bWlpdXRidGZpNSJ9.gdQdIvN_1N0mlrCFnwjLCw',
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(40.2224765, -85.4329497),
        L.latLng(40.2324765, -85.4439497)
    ],
    router: L.Routing.mapbox('pk.eyJ1IjoiZHN0ZWVsZTIwMTQiLCJhIjoiY2phdHY3ejRtMXp2YjJ4bWlpdXRidGZpNSJ9.gdQdIvN_1N0mlrCFnwjLCw'),
}).addTo(map);

var geojsonMarkerOptions = {
    radius: 18,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var realtime = L.realtime({
    url: './public/testData.json',
    crossOrigin: true,
    type: 'json'
}, {
    interval: 3 * 1000,

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            'icon': L.icon({
                iconUrl: "./public/res/transparentBus.png",
                iconSize:     [120, 80], // size of the icon
                iconAnchor:   [60, 40], 
            })
        });
    }
}).addTo(map);

var realtime = L.realtime({
    url: 'https://wanderdrone.appspot.com',
    crossOrigin: true,
    type: 'json'
}, {
    interval: 3 * 1000,


    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            'icon': L.icon({
                iconUrl: "./public/res/transparentBus.png",
                iconSize:     [120, 80], // size of the icon
                iconAnchor:   [60, 40], 
            })
        });
    }
}).addTo(map);