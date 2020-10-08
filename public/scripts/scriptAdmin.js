const cards = document.querySelectorAll('.view-card')


for(let card of cards){
    card.addEventListener('click', function() {
        const recipeId = card.getAttribute('id')
       window.location.href= `/admin/recipe/${recipeId}`
    })
}