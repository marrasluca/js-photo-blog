const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const methodFetch = {method: 'GET'}

const row = document.querySelector('.row')
const overlay = document.querySelector('.overlay')
const overlayImg = document.querySelector('.overlay img')
const overlayButton = document.querySelector('.overlay button')


console.log( overlay, overlayImg)

//richiesta fetch all'endpoint API
fetch(endpoint, methodFetch)

// Quando la risposta è arrivata, convertila in formato JSON
.then( res => res.json())
.then( data =>  {
    console.log (data) //array di cards

    data.forEach(element => {

        const {date, id, title, url} = element
        row.innerHTML +=
        `
        <div class="col-sm-12 col-md-6 col-lg-4 cards" data-id='${id}'>
        <div class="card p-3 position-relative">
                <img src="./assets_day1/img/pin.svg" alt="" class="position-absolute top-0 start-50 translate-middle">
                <img class="card-image-top" src='${url}'  alt='${title}' />
                <div class="card-body">
                    <span class="card-text">${date}</span>
                    <h3 class="card-title text-uppercase">${title}</h3>
                </div>
            </div>
        </div>
        `

        arrayCards = document.querySelectorAll('.cards')
    });
    
    console.log (arrayCards)

    arrayCards.forEach(element => {
        element.addEventListener('click', function(){
            console.log( element.getAttribute('data-id'))
            overlay.classList.remove('d-none')
            overlayImg.setAttribute('src', `https://marcolanci.it/boolean/assets/pictures/${element.getAttribute('data-id')}.png`)
        })
    })

    overlayButton.addEventListener('click', function(){
        overlay.classList.add('d-none')
    })

})
.catch( error => {
    console.error( error )
})
