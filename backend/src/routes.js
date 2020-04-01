const express = require('express')

const CategorieController = require('./app/controllers/CategorieController')

const routes = express.Router()

routes.post('/categories', CategorieController.store)
routes.get('/categories', CategorieController.index)
routes.get('/categories/:categorie_id', CategorieController.show)
routes.put('/categories/:categorie_id', CategorieController.update)
routes.delete('/categories/:categorie_id', CategorieController.delete)

module.exports = routes