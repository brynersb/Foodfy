const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')


// const closeModal = document.querySelector ('.close-modal')

// for (let card of cards) {
//     card.addEventListener("click", function(){
//         modalOverlay.classList.add('active')
        
//     })
    
// }

//levar para pagina da receita

for(let card of cards){
    card.addEventListener('click', function() {
        const recipeId = card.getAttribute('id')
       window.location.href= `/recipe/${recipeId}`
    })
}

// closeModal.addEventListener("click", function(){
//     modalOverlay.classList.remove('active')
// })

document.querySelector ('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
})

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "none")
        document.getElementById(el).style.display = 'block';
    else
        document.getElementById(el).style.display = 'none';
}

