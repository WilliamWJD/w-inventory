const Sequelize = require('sequelize')

const dbConfig = require('../config/database')

class Database{
    constructor(){
        this.connection = new Sequelize(dbConfig) 
    }
}

module.exports = new Database()