module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('Usuario', {
      id_usuario: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre_usuario: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        unique: true,
        allowNull: false
      },
      contrasena: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      id_rol: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Roles',
          key: 'id_rol'
        }
      },
      fecha_creacion: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    }, {
      tableName: 'Usuarios',
      timestamps: false
    });
  
    return Usuario;
  };
  