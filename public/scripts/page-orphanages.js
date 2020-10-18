// create map
const map = L.map('mapid').setView([-23.6815315,-46.8754908], 16);

// create and add tilelayer
L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],    
    popupAnchor: [170,2]
})

// create popup overlay
const popup = L.popup ({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das Meninas <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg"></img></a>')

// create and add marker
L
.marker([-23.6815315,-46.8754908], {icon})
.addTo(map)
.bindPopup(popup)