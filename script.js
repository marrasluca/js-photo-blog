const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'
const methodFetch = {method: 'GET'}

const row = document.querySelector('.row')

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
        <div class="card col-sm-12 p-3 position-relative">
                <img src="./assets_day1/img/pin.svg" alt="" class="position-absolute top-0 start-50 translate-middle">
                <img class="card-image-top" src='${url}'  alt='${title}' />
                <div class="card-body">
                    <span class="card-text">${date}</span>
                    <h3 class="card-title text-uppercase">${title}</h3>
                </div>
            </div>
        `
    })

})
.catch( error => {
    console.error( error )
})
