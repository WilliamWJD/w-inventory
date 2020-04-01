const express = require('express')

const CategorieController = require('./app/controllers/CategorieController')

const routes = express.Router()

routes.post('/categories', CategorieController.store)
routes.get('/categories', CategorieController.index)

module.exports = routes