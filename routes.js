const express = require('express')
const routes = express.Router()
const recipes = require('./controller/recipes')
const data = require('./data')


routes.get("/", recipes.index )

routes.get("/about", recipes.about)

routes.get("/recipes", recipes.allRecipes)


routes.get("/recipe", recipes.show)

// server.use(function (req, res) {
//     res.status(404).render("not-found");
// });

module.exports = routes