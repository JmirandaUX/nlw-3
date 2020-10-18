// create map
const map = L.map('mapid').setView([-23.6815315,-46.8754908], 16);

// create and add tilelayer
L.tileLayer ('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;
 
//creat and add marker 
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon 
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// photos uploaded

function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    //pegar o container para duplciar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload') 
    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    // verificar se o campo está vazio se sim , não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    input.value =""


    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)

}

function deleteField(event) {
    const span = event.currentTarget
    const fieldsContainer = document.querySelectorAll('.new-upload') 
    if(fieldsContainer.length < 2) {
        //limpar o valor do campo
        span.parentNode.children[0].value =""
        return 
    }

    // deletar o campo 
    span.parentNode.remove();
}

// troca do sim e não

function toggleSelect(event) {
    //retirar a classe active dos botões
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'))

    //colocar a classe active no botão selecionado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar meu input hidden com o valor selecionados
    const input = document.querySelector('[name="open_on_weekends"]')


    // verificar se sim ou não 
    input.value = button.dataset.value
    
}