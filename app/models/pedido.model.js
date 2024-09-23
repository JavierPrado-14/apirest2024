module.exports = (sequelize, Sequelize) => {
    const Pedido = sequelize.define('Pedido', {
      id_pedido: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Clientes',
          key: 'id_cliente'
        }
      },
      fecha_pedido: {
        type: Sequelize.DATE,
        allowNull: false
      },
      total: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id_usuario'
        }
      }
    }, {
      tableName: 'Pedidos',
      timestamps: false
    });
  
    return Pedido;
  };
  