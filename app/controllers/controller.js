const db = require('../config/db.config.js');
const Libro = db.Libro;
const Prestamo = db.Prestamo;

// Controladores para Libro
exports.createLibro = (req, res) => {
    let libro = {};

    try {
        libro.codigo = req.body.codigo;
        libro.nombre = req.body.nombre;
        libro.editorial = req.body.editorial;
        libro.autor = req.body.autor;
        libro.genero = req.body.genero;
        libro.paisAutor = req.body.paisAutor;
        libro.numeroPaginas = req.body.numeroPaginas;
        libro.añoEdicion = req.body.añoEdicion;
        libro.precio = req.body.precio;

        Libro.create(libro).then(result => {
            res.status(200).json({
                message: "Libro creado con éxito con id = " + result.id,
                libro: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

exports.retrieveAllLibros = (req, res) => {
    Libro.findAll()
        .then(libroInfos => {
            res.status(200).json({
                message: "Libros recuperados con éxito!",
                libros: libroInfos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.getLibroById = (req, res) => {
    let libroId = req.params.id;
    Libro.findByPk(libroId)
        .then(libro => {
            res.status(200).json({
                message: "Libro recuperado con éxito con id = " + libroId,
                libro: libro
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.updateLibroById = async (req, res) => {
    try {
        let libroId = req.params.id;
        let libro = await Libro.findByPk(libroId);

        if (!libro) {
            res.status(404).json({
                message: "No se encontró el libro para actualizar con id = " + libroId,
                libro: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                codigo: req.body.codigo,
                nombre: req.body.nombre,
                editorial: req.body.editorial,
                autor: req.body.autor,
                genero: req.body.genero,
                paisAutor: req.body.paisAutor,
                numeroPaginas: req.body.numeroPaginas,
                añoEdicion: req.body.añoEdicion,
                precio: req.body.precio
            };
            let result = await Libro.update(updatedObject, { returning: true, where: { id: libroId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el libro con id = " + req.params.id,
                    error: "No se pudo actualizar",
                });
            }

            res.status(200).json({
                message: "Libro actualizado con éxito con id = " + libroId,
                libro: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el libro con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteLibroById = async (req, res) => {
    try {
        let libroId = req.params.id;
        let libro = await Libro.findByPk(libroId);

        if (!libro) {
            res.status(404).json({
                message: "No existe un libro con id = " + libroId,
                error: "404",
            });
        } else {
            await libro.destroy();
            res.status(200).json({
                message: "Libro eliminado con éxito con id = " + libroId,
                libro: libro,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el libro con id = " + req.params.id,
            error: error.message,
        });
    }
};

// Controladores para Prestamo
exports.createPrestamo = (req, res) => {
    let prestamo = {};

    try {
        prestamo.codigoLibro = req.body.codigoLibro;
        prestamo.codigoUsuario = req.body.codigoUsuario;
        prestamo.fechaSalida = req.body.fechaSalida;
        prestamo.fechaMaximaDevolucion = req.body.fechaMaximaDevolucion;
        prestamo.fechaDevolucion = req.body.fechaDevolucion;

        Prestamo.create(prestamo).then(result => {
            res.status(200).json({
                message: "Préstamo creado con éxito con id = " + result.id,
                prestamo: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

exports.retrieveAllPrestamos = (req, res) => {
    Prestamo.findAll()
        .then(prestamoInfos => {
            res.status(200).json({
                message: "Préstamos recuperados con éxito!",
                prestamos: prestamoInfos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.getPrestamoById = (req, res) => {
    let prestamoId = req.params.id;
    Prestamo.findByPk(prestamoId)
        .then(prestamo => {
            res.status(200).json({
                message: "Préstamo recuperado con éxito con id = " + prestamoId,
                prestamo: prestamo
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.updatePrestamoById = async (req, res) => {
    try {
        let prestamoId = req.params.id;
        let prestamo = await Prestamo.findByPk(prestamoId);

        if (!prestamo) {
            res.status(404).json({
                message: "No se encontró el préstamo para actualizar con id = " + prestamoId,
                prestamo: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                codigoLibro: req.body.codigoLibro,
                codigoUsuario: req.body.codigoUsuario,
                fechaSalida: req.body.fechaSalida,
                fechaMaximaDevolucion: req.body.fechaMaximaDevolucion,
                fechaDevolucion: req.body.fechaDevolucion
            };
            let result = await Prestamo.update(updatedObject, { returning: true, where: { id: prestamoId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el préstamo con id = " + req.params.id,
                    error: "No se pudo actualizar",
                });
            }

            res.status(200).json({
                message: "Préstamo actualizado con éxito con id = " + prestamoId,
                prestamo: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el préstamo con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deletePrestamoById = async (req, res) => {
    try {
        let prestamoId = req.params.id;
        let prestamo = await Prestamo.findByPk(prestamoId);

        if (!prestamo) {
            res.status(404).json({
                message: "No existe un préstamo con id = " + prestamoId,
                error: "404",
            });
        } else {
            await prestamo.destroy();
            res.status(200).json({
                message: "Préstamo eliminado con éxito con id = " + prestamoId,
                prestamo: prestamo,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el préstamo con id = " + req.params.id,
            error: error.message,
        });
    }
};
