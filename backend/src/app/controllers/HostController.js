import Host from '../models/Host'

class HostController{
    async index(req, res){
        const host = await Host.findAll()
        return res.json(host)
    }

    async show(req, res){
        const { host_id } = req.params
        const host = await Host.findByPk(host_id)
        if(!host){
            return res.status(401).json({error:'Host não encontrado !'})
        }
        return res.json(host)
    }

    async store(req, res){
        const {filename} = req.file
        const {
            description,
            service_tag,
            ram,
            cpu,
            serial,
            patrimony,
            status,
            department_id
        } = req.body

        const host = await Host.create({
            description, 
            service_tag, 
            ram, 
            cpu, 
            serial, 
            patrimony, 
            department_id,
            image_path:filename,
            status
        })
        return res.json(host)
    }

    async update(req, res){
        const {host_id} = req.params
        const {
            description,
            service_tag,
            ram,
            cpu,
            serial,
            patrimony,
            status,
            department_id
        } = req.body
        
        const host = await Host.findByPk(host_id)
        if(!host){
            return res.status(401).json({error:'Host não encontrado !'})
        }

        await host.update({
            description, service_tag, ram, cpu, serial, patrimony, department_id, status
        })

        return res.json(host)
    }

    async delete(req, res){
        const {host_id} = req.params

        const host = await Host.findByPk(host_id)
        if(!host){
            return res.status(401).json({error:'Host não encontrado !'})
        }

        await host.destroy()
        return res.json({})
    }
}

export default new HostController()