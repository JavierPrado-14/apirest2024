module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define('Producto', {
      id_producto: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      descripcion: {
        type: Sequelize.TEXT,
      },
      precio: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      id_categoria: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categorias',
          key: 'id_categoria'
        }
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      es_mayorista: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      }
    }, {
      tableName: 'Productos',
      timestamps: false
    });
  
    return Producto;
  };
  