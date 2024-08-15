// app/models/libro.model.js
module.exports = (sequelize, Sequelize) => {
  const Libro = sequelize.define("libro", {
    codigo: {
      type: Sequelize.INTEGER
    },
    nombre: {
      type: Sequelize.STRING(60)
    },
    editorial: {
      type: Sequelize.STRING(25)
    },
    autor: {
      type: Sequelize.STRING(25)
    },
    genero: {
      type: Sequelize.STRING(20)
    },
    paisAutor: {
      type: Sequelize.STRING(20)
    },
    numeroPaginas: {
      type: Sequelize.INTEGER
    },
    añoEdicion: {
      type: Sequelize.DATE
    },
    precio: {
      type: Sequelize.DECIMAL(10, 2)
    }
  });

  return Libro;
};
