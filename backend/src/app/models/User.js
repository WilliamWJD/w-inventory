import Sequelize, {Model} from 'sequelize'

class User extends Model{
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            login: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING
        },{
            sequelize,
            tableName:'users'
        })
    }
}

export default User