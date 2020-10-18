const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false

}
// create map
const map = L.map('mapid', options).setView([-23.6815315,-46.8754908], 16);

// create and add tilelayer
L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

//create icon
const icon = L.icon ({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],    
    popupAnchor: [170,2]
})


// create and add marker
L
.marker([-23.6815315,-46.8754908], {icon})
.addTo(map)

// image gallery

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    
    // selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //atualizar o container de imagem grande
    imageContainer.src = image.src
    //adicionar a classe .active ao botão que foi clicado

    button.classList.add('active')
} 