module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('hosts', { 
        id:{
          type:Sequelize.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
        },
        description:{
          type:Sequelize.STRING,
          allowNull:false
        },
        service_tag:{
          type:Sequelize.STRING,
          allowNull:true
        },
        ram:{
          type:Sequelize.STRING,
          allowNull:true
        },
        cpu:{
          type:Sequelize.STRING,
          allowNull:true
        },
        serial:{
          type:Sequelize.STRING,
          allowNull:false
        },
        patrimony:{
          type:Sequelize.STRING,
          allowNull:false
        },
        department_id:{
          type:Sequelize.INTEGER,
          references:{
            model:'departments',
            key:'id'
          },
          allowNull:false
        },
        image_path:{
          type:Sequelize.STRING,
          allowNull:false
        },
        status:{
          type:Sequelize.BOOLEAN,
          allowNull:false
        },
        created_at:{
          type:Sequelize.DATE,
          allowNull:false
        },
        updated_at:{
          type:Sequelize.DATE,
          allowNull:false
        }
      });
  },

  down: queryInterface => {
      return queryInterface.dropTable('hosts');
  }
};
