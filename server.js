const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./app/config/db.config.js');

// Sincronización de la base de datos sin forzar la recreación de tablas
db.sequelize.sync().then(() => {
  console.log('Resync without { force: true }');
});

// Configuración de CORS
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Configuración de Body Parser
app.use(bodyParser.json());

// Importar rutas
let router = require('./app/routers/router.js');
app.use('/', router);

// Ruta raíz
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido Estudiantes de UMG" });
});

// Crear un Servidor
const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
