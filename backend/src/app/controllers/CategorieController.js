import * as Yup from 'yup'

import Categorie from '../models/Categorie'

class CategorieController {
    async index(req, res) {
        const categories = await Categorie.findAll()
        return res.json(categories)
    }

    async show(req, res){
        const { categorie_id } = req.params

        const categorie = await Categorie.findByPk(categorie_id)
        if(!categorie){
            return res.status(401).json({error:'Categoria não encontrada'})
        }

        return res.json(categorie)
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required()
        })

        if(!(await schema.isValid(req.body))){
            return res.status(401).json({error: 'Erro ao validar dados'})
        }

        const { name } = req.body
        const categorie = await Categorie.create({ name })
        return res.json(categorie)
    }

    async update(req, res){
        const { categorie_id } = req.params
        const { name } = req.body

        const categorie = await Categorie.findByPk(categorie_id)
        if(!categorie){
            return res.status(401).json({error:'Categoria não encontrada'})
        }

        categorie.update({ name })
        return res.json(categorie)
    }

    async delete(req, res){
        const { categorie_id } = req.params

        const categorie = await Categorie.findByPk(categorie_id)
        if(!categorie){
            return res.status(401).json({error:'Categoria não encontrada'})
        }

        categorie.destroy()
        return res.json({})
    }

}

export default new CategorieController()