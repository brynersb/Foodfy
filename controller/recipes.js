const fs = require('fs')
const data = require('../data.json')

// pagina inicial
exports.index = function (req, res) {
    return res.render("home", { items: data.recipes })
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

//####### rotas de admin

exports.indexAdmin = function (req, res) {


    return res.render('./admin/index.njk', { items: data.recipes })
}

exports.showAdmin = function (req, res) {

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

    return res.render('./admin/recipe.njk', { item: recipe })
}

exports.create = function (req, res) {

    return res.render("./admin/create")
}

exports.post = function (req, res){
    
    return res.recipe("./admin/index")
}
