const Categorie = require('../models/Categorie')

class CategorieController{
   async index(req, res){
       const categories = await Categorie.findAll()
       return res.json(categories)
   }

    async store(req, res){
        const { name } = req.body
        const categorie = await Categorie.create({  name })
        return res.json(categorie)
    }
}

module.exports = new CategorieController()