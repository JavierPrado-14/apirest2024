module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define('Cliente', {
      id_cliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      telefono: {
        type: Sequelize.STRING(20)
      },
      direccion: {
        type: Sequelize.TEXT
      },
      es_mayorista: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id_usuario'
        }
      }
    }, {
      tableName: 'Clientes',
      timestamps: false
    });
  
    return Cliente;
  };
  