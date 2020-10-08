const fs = require('fs')
const data = require('../data.json')

// pagina inicial
exports.index = function (req, res) {
    return res.render("home", { items: data })

}

//pagina sobre
exports.about = function (req, res) {
    return res.render("about")
}

//pagina de receitas

exports.allRecipes = function (req, res) {

    return res.render("recipes", { items: data.recipes })
}

//mostrar receita unica
exports.show = function (req, res) {
    const { id } = req.params

    const foundRecipe = data.recipes.find(function (recipe) {
        return recipe.id == id
    })

    if (!foundRecipe) {
        return res.send("Receita não encontrata!!!")
    }

    const recipe = {
        ...foundRecipe,
    }

    return res.render("recipe", { item: recipe })
}