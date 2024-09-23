module.exports = (sequelize, Sequelize) => {
    const Categoria = sequelize.define('Categoria', {
      id_categoria: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
      }
    }, {
      tableName: 'Categorias',
      timestamps: false
    });
  
    return Categoria;
  };
  