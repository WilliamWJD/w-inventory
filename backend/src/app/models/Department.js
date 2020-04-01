const Sequelize = require('sequelize')

class Department extends Sequelize.Model{
    static init(sequelize){
        super.init({
            name:Sequelize.STRING
        },{
            sequelize,
            tableName:'departments'
        })
    }
}

module.exports = Department