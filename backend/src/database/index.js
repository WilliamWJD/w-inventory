const Sequelize = require('sequelize')

const dbConfig = require('../config/database')
const Categorie = require('../app/models/Categorie')

const models = [Categorie]

class Database{
    constructor(){
        this.connection = new Sequelize(dbConfig)
        this.init()
    }
    
    init(){
        models.forEach(model => model.init(this.connection))
    }
}

module.exports = new Database()