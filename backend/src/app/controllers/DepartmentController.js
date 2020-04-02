import Department from '../models/Department'
import * as Yup from 'yup'

class DepartmentController{
    async index(req, res) {
        const department = await Department.findAll()
        return res.json(department)
    }

    async show(req, res){
        const { department_id } = req.params

        const department = await Department.findByPk(department_id)
        if(!department){
            return res.status(401).json({error:'Departamento não encontrado'})
        }

        return res.json(department)
    }

    async store(req, res){
        const schema = Yup.object().shape({
            name: Yup.string().required()
        })

        if(!(await schema.isValid(req.body))){
            return res.status(401).json({error: 'Erro ao validar dados'})
        }

        const { name } = req.body
        const department = await Department.create({ name })
        return res.json(department)
    }

    async update(req, res){
        const { department_id } = req.params
        const { name } = req.body

        const department = await Department.findByPk(department_id)
        if(!department){
            return res.status(401).json({error:'Departamento não encontrado'})
        }

        department.update({ name })
        return res.json(department)
    }

    async delete(req, res){
        const { department_id } = req.params

        const department = await Department.findByPk(department_id)
        if(!department){
            return res.status(401).json({error:'Departamento não encontrado'})
        }

        department.destroy()
        return res.json({})
    }
}

export default new DepartmentController()