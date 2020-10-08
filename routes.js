const express = require('express')
const routes = express.Router()
const recipes = require('./controller/recipes')
const data = require('./data')


routes.get("/", recipes.index )

routes.get("/about", recipes.about)

routes.get("/recipes", recipes.allRecipes)

routes.get("/recipe/:id", recipes.show)

// server.use(function (req, res) {
//     res.status(404).render("not-found");
// });

//#### Admin

routes.get("/admin", recipes.indexAdmin)

routes.get("/admin/recipe/:id", recipes.showAdmin)

module.exports = routes