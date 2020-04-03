import Host from '../models/Host'

class HostController{
    async store(req, res){
        const { department_id } = req.params
        const {
            description,
            service_tag,
            ram,
            cpu,
            serial,
            patrimony,
            status
        } = req.body

        const host = await Host.create({
            description, service_tag, ram, cpu, serial, patrimony, department_id, status
        })
        return res.json(host)
    }
}

export default new HostController()