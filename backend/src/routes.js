import express from 'express'

import CategorieController from './app/controllers/CategorieController'
import DepartmentController from './app/controllers/DepartmentController'
import HostController from './app/controllers/HostController'

const routes = express.Router()

routes.post('/categories', CategorieController.store)
routes.get('/categories', CategorieController.index)
routes.get('/categories/:categorie_id', CategorieController.show)
routes.put('/categories/:categorie_id', CategorieController.update)
routes.delete('/categories/:categorie_id', CategorieController.delete)

routes.post('/departments', DepartmentController.store)
routes.get('/departments', DepartmentController.index)
routes.get('/departments/:department_id', DepartmentController.show)
routes.put('/departments/:department_id', DepartmentController.update)
routes.delete('/departments/:department_id', DepartmentController.delete)

routes.post('/hosts/:department_id', HostController.store)

module.exports = routes