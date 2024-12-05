import flags from './model/flags.js';

document.addEventListener('DOMContentLoaded', () =>{ 
    
    function CriarBandeira(bandeira){

        const {id, name, image} = bandeira

        return `
        <div class= "flag col-2 my-2 text center">
        <img src="${image}" alt=${id}">
        <p>${name}</p>
        </div>        
        `

    }

    function LoadBandeira(){

        let html = ''
        flags.forEach((bandeira) => {

            html += CriarBandeira(bandeira)
        })

        const main = document.getElementById('main')
        main.innerHTML = html

    }

    LoadBandeira()

})