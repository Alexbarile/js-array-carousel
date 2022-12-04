//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';
let itemsThumbnails = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`

    itemsThumbnails += `<div class="thumb"><img src="./img/${imagesArray[i]}"></div>`;
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

// inseriamo immagini nel thumbnails

const thumbnailsPreview = document.querySelector('.thumbnails');
thumbnailsPreview.innerHTML += itemsThumbnails;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

// thumbnails

const thumbnails = document.getElementsByClassName('thumb');

thumbnails[itemActive].classList.add('active');


const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// freccia verso dx

next.addEventListener('click', function(){
    // si può mettere'imagesArray' o 'items'
    if(itemActive < imagesArray.length -1){
        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        //incremento il suo valore di 1
        itemActive++;
        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        items[itemActive].classList.add('active');
        //stessa cosa per i cerchi
        circles[itemActive].classList.add('active');
        // stessa cosa per i thumbanails
        thumbnails[itemActive].classList.add('active');


    }
    else{
        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active)');
        //incremento il suo valore di 1
        itemActive=0
        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        items[itemActive].classList.add('active');
        //stessa cosa per i cerchi
        circles[itemActive].classList.add('active');
        // stessa cosa per i thumbanails
        thumbnails[itemActive].classList.add('active');
    }
});

// freccia verso sx

prev.addEventListener('click', function(){
    if(itemActive > 0){
        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        //decremento il suo valore di 1
        itemActive--;
        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        items[itemActive].classList.add('active');
        //stessa cosa per i cerchi
        circles[itemActive].classList.add('active');
        // stessa cosa per i thumbanails
        thumbnails[itemActive].classList.add('active');
    }
    else{
        //verifico l'elemento attivo (itemActive)
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        thumbnails[itemActive].classList.remove('active');
        //decremento il suo valore di 1
        itemActive=imagesArray.length -1;
        //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
        items[itemActive].classList.add('active');
        //stessa cosa per i cerchi
        circles[itemActive].classList.add('active');
        // stessa cosa per i thumbanails
        thumbnails[itemActive].classList.add('active');
    }
})


