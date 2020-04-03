import Sequelize from 'sequelize'

import dbConfig from '../config/database'
import Categorie from '../app/models/Categorie'
import Department from '../app/models/Department'
import Host from '../app/models/Host'

const models = [Categorie, Department, Host]

class Database{
    constructor(){
        this.connection = new Sequelize(dbConfig)
        this.init()
    }
    
    init(){
        models.forEach(model => model.init(this.connection))
    }
}

export default new Database()