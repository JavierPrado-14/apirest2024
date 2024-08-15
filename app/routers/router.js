let express = require('express');
let router = express.Router();

const libros = require('../controllers/controller.js');
const prestamos = require('../controllers/controller.js');

// Rutas para Libro
router.post('/api/libros/create', libros.createLibro);
router.get('/api/libros/all', libros.retrieveAllLibros);
router.get('/api/libros/onebyid/:id', libros.getLibroById);
router.put('/api/libros/update/:id', libros.updateLibroById);
router.delete('/api/libros/delete/:id', libros.deleteLibroById);

// Rutas para Prestamo
router.post('/api/prestamos/create', prestamos.createPrestamo);
router.get('/api/prestamos/all', prestamos.retrieveAllPrestamos);
router.get('/api/prestamos/onebyid/:id', prestamos.getPrestamoById);
router.put('/api/prestamos/update/:id', prestamos.updatePrestamoById);
router.delete('/api/prestamos/delete/:id', prestamos.deletePrestamoById);

module.exports = router;
