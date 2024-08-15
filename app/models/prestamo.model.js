// app/models/prestamo.model.js
module.exports = (sequelize, Sequelize) => {
  const Prestamo = sequelize.define("prestamo", {
    numeroPedido: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    codigoLibro: {
      type: Sequelize.INTEGER
    },
    codigoUsuario: {
      type: Sequelize.INTEGER
    },
    fechaSalida: {
      type: Sequelize.DATE
    },
    fechaMaximaDevolucion: {
      type: Sequelize.DATE
    },
    fechaDevolucion: {
      type: Sequelize.DATE
    }
  });

  return Prestamo;
};
