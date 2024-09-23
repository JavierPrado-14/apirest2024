module.exports = (sequelize, Sequelize) => {
    const DetallePedido = sequelize.define('DetallePedido', {
      id_detalle: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_pedido: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pedidos',
          key: 'id_pedido'
        }
      },
      id_producto: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Productos',
          key: 'id_producto'
        }
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      precio_unitario: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      subtotal: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      }
    }, {
      tableName: 'DetallesPedido',
      timestamps: false
    });
  
    return DetallePedido;
  };
  