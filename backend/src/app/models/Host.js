import Sequelize  from 'sequelize'

class Host extends Sequelize.Model{
    static init(sequelize){
        super.init({
            description:Sequelize.STRING,
            service_tag:Sequelize.STRING,
            ram:Sequelize.STRING,
            cpu:Sequelize.STRING,
            serial:Sequelize.STRING,
            patrimony:Sequelize.STRING,
            department_id:Sequelize.INTEGER,
            status:Sequelize.BOOLEAN
        },{
            sequelize,
            tableName:'hosts'
        })
    }
}

export default Host