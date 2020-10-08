const fs = require('fs')
const data = require('../data')

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

    return res.render("recipes", { items: data })
}

//mostrar receita unica
exports.show = function (req, res) {
    const id = req.query.id
    const data = recipes.find(function (data) {
        return data.id == id
    })

    return res.render("recipe", { item: data })
}