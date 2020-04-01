const Sequelize = require('sequelize')

class Categorie extends Sequelize.Model{
    static init(sequelize){
        super.init({
            name:Sequelize.STRING
        },{
            sequelize,
            tableName:'categories'
        })
    }
}

module.exports = Categorie