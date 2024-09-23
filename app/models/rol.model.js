module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define('Rol', {
      id_rol: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING(50),
        allowNull: false
      }
    }, {
      tableName: 'Roles',
      timestamps: false
    });
  
    return Rol;
  };
  