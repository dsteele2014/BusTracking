var map = L.map('mapid').setView([40.2224765, -85.4329497], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZHN0ZWVsZTIwMTQiLCJhIjoiY2phdHY3ejRtMXp2YjJ4bWlpdXRidGZpNSJ9.gdQdIvN_1N0mlrCFnwjLCw',
}).addTo(map);

//var myMovingMarker = L.Marker.movingMarker([[40.2224765, -85.4329497],[40.2324765, -85.4439497]],[20000]).addTo(map);
//
//myMovingMarker.start();

//L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//}).addTo(map);
//
//L.Routing.control({
//    waypoints: [
//        L.latLng(40.2224765, -85.4329497),
//        L.latLng(40.2324765, -85.4439497)
//    ],
//    router: L.Routing.mapbox('pk.eyJ1IjoiZHN0ZWVsZTIwMTQiLCJhIjoiY2phdHY3ejRtMXp2YjJ4bWlpdXRidGZpNSJ9.gdQdIvN_1N0mlrCFnwjLCw'),
//}).addTo(map);

var geojsonMarkerOptions = {
    radius: 18,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var realtime = L.realtime({
    url: 'https://wanderdrone.appspot.com/',
    crossOrigin: true,
    type: 'json'
}, {
    interval: 3 * 1000,
//    pointToLayer: function (feature, latlng) {
//		return L.circleMarker(latlng, geojsonMarkerOptions)
//	}

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
            'icon': L.icon({
                iconUrl: 'http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
                iconSize:     [120, 80], // size of the icon
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            })
        });
    }
}).addTo(map);

realtime.on('update', function(e) {
    var coordPart = function(v, dirs) {
            return dirs.charAt(v >= 0 ? 0 : 1) +
                (Math.round(Math.abs(v) * 100) / 100).toString();
        };
        

    map.fitBounds(realtime.getBounds(), {maxZoom: 3});
});