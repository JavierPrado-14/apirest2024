const db = require('../config/db.config.js');
const Categoria = db.Categoria;
const Producto = db.Producto;
const Rol = db.Rol;
const Usuario = db.Usuario;
const Cliente = db.Cliente;
const Pedido = db.Pedido;
const DetallePedido = db.DetallePedido;

// Controladores para Categoria
exports.createCategoria = (req, res) => {
    let categoria = {};
    try {
        categoria.nombre = req.body.nombre;

        Categoria.create(categoria).then(result => {
            res.status(200).json({
                message: "Categoría creada con éxito con id = " + result.id_categoria,
                categoria: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

exports.retrieveAllCategorias = (req, res) => {
    Categoria.findAll()
        .then(categoriaInfos => {
            res.status(200).json({
                message: "Categorías recuperadas con éxito!",
                categorias: categoriaInfos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.getCategoriaById = (req, res) => {
    let categoriaId = req.params.id;
    Categoria.findByPk(categoriaId)
        .then(categoria => {
            res.status(200).json({
                message: "Categoría recuperada con éxito con id = " + categoriaId,
                categoria: categoria
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.updateCategoriaById = async (req, res) => {
    try {
        let categoriaId = req.params.id;
        let categoria = await Categoria.findByPk(categoriaId);

        if (!categoria) {
            res.status(404).json({
                message: "No se encontró la categoría para actualizar con id = " + categoriaId,
                categoria: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                nombre: req.body.nombre
            };
            let result = await Categoria.update(updatedObject, { returning: true, where: { id_categoria: categoriaId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar la categoría con id = " + req.params.id,
                    error: "No se pudo actualizar",
                });
            }

            res.status(200).json({
                message: "Categoría actualizada con éxito con id = " + categoriaId,
                categoria: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar la categoría con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteCategoriaById = async (req, res) => {
    try {
        let categoriaId = req.params.id;
        let categoria = await Categoria.findByPk(categoriaId);

        if (!categoria) {
            res.status(404).json({
                message: "No existe una categoría con id = " + categoriaId,
                error: "404",
            });
        } else {
            await categoria.destroy();
            res.status(200).json({
                message: "Categoría eliminada con éxito con id = " + categoriaId,
                categoria: categoria,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar la categoría con id = " + req.params.id,
            error: error.message,
        });
    }
};

// Controladores para Producto
exports.createProduct = (req, res) => {
    let product = {};

    try {
        product.nombre = req.body.nombre;
        product.descripcion = req.body.descripcion;
        product.precio = req.body.precio;
        product.id_categoria = req.body.id_categoria;
        product.stock = req.body.stock;
        product.es_mayorista = req.body.es_mayorista;

        Producto.create(product).then(result => {
            res.status(200).json({
                message: "Producto creado con éxito con id = " + result.id_producto,
                producto: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

exports.retrieveAllProducts = (req, res) => {
    Producto.findAll()
        .then(productInfos => {
            res.status(200).json({
                message: "Productos recuperados con éxito!",
                productos: productInfos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.getProductById = (req, res) => {
    let productId = req.params.id;
    Producto.findByPk(productId)
        .then(product => {
            res.status(200).json({
                message: "Producto recuperado con éxito con id = " + productId,
                producto: product
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.updateProductById = async (req, res) => {
    try {
        let productId = req.params.id;
        let product = await Producto.findByPk(productId);

        if (!product) {
            res.status(404).json({
                message: "No se encontró el producto para actualizar con id = " + productId,
                producto: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion,
                precio: req.body.precio,
                id_categoria: req.body.id_categoria,
                stock: req.body.stock,
                es_mayorista: req.body.es_mayorista
            };
            let result = await Producto.update(updatedObject, { returning: true, where: { id_producto: productId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el producto con id = " + req.params.id,
                    error: "No se pudo actualizar",
                });
            }

            res.status(200).json({
                message: "Producto actualizado con éxito con id = " + productId,
                producto: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el producto con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteProductById = async (req, res) => {
    try {
        let productId = req.params.id;
        let product = await Producto.findByPk(productId);

        if (!product) {
            res.status(404).json({
                message: "No existe un producto con id = " + productId,
                error: "404",
            });
        } else {
            await product.destroy();
            res.status(200).json({
                message: "Producto eliminado con éxito con id = " + productId,
                producto: product,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el producto con id = " + req.params.id,
            error: error.message,
        });
    }
};

// Controladores para Rol
exports.createRol = (req, res) => {
    let rol = {};
    try {
        rol.nombre = req.body.nombre;

        Rol.create(rol).then(result => {
            res.status(200).json({
                message: "Rol creado con éxito con id = " + result.id_rol,
                rol: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

exports.retrieveAllRoles = (req, res) => {
    Rol.findAll()
        .then(rolInfos => {
            res.status(200).json({
                message: "Roles recuperados con éxito!",
                roles: rolInfos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.getRolById = (req, res) => {
    let rolId = req.params.id;
    Rol.findByPk(rolId)
        .then(rol => {
            res.status(200).json({
                message: "Rol recuperado con éxito con id = " + rolId,
                rol: rol
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.updateRolById = async (req, res) => {
    try {
        let rolId = req.params.id;
        let rol = await Rol.findByPk(rolId);

        if (!rol) {
            res.status(404).json({
                message: "No se encontró el rol para actualizar con id = " + rolId,
                rol: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                nombre: req.body.nombre
            };
            let result = await Rol.update(updatedObject, { returning: true, where: { id_rol: rolId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el rol con id = " + req.params.id,
                    error: "No se pudo actualizar",
                });
            }

            res.status(200).json({
                message: "Rol actualizado con éxito con id = " + rolId,
                rol: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el rol con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteRolById = async (req, res) => {
    try {
        let rolId = req.params.id;
        let rol = await Rol.findByPk(rolId);

        if (!rol) {
            res.status(404).json({
                message: "No existe un rol con id = " + rolId,
                error: "404",
            });
        } else {
            await rol.destroy();
            res.status(200).json({
                message: "Rol eliminado con éxito con id = " + rolId,
                rol: rol,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el rol con id = " + req.params.id,
            error: error.message,
        });
    }
};

// Controladores para Usuario
exports.createUsuario = (req, res) => {
    let usuario = {};

    try {
        usuario.nombre_usuario = req.body.nombre_usuario;
        usuario.email = req.body.email;
        usuario.contrasena = req.body.contrasena;
        usuario.id_rol = req.body.id_rol;

        Usuario.create(usuario).then(result => {
            res.status(200).json({
                message: "Usuario creado con éxito con id = " + result.id_usuario,
                usuario: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

exports.retrieveAllUsuarios = (req, res) => {
    Usuario.findAll()
        .then(usuarioInfos => {
            res.status(200).json({
                message: "Usuarios recuperados con éxito!",
                usuarios: usuarioInfos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.getUsuarioById = (req, res) => {
    let usuarioId = req.params.id;
    Usuario.findByPk(usuarioId)
        .then(usuario => {
            res.status(200).json({
                message: "Usuario recuperado con éxito con id = " + usuarioId,
                usuario: usuario
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.updateUsuarioById = async (req, res) => {
    try {
        let usuarioId = req.params.id;
        let usuario = await Usuario.findByPk(usuarioId);

        if (!usuario) {
            res.status(404).json({
                message: "No se encontró el usuario para actualizar con id = " + usuarioId,
                usuario: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                nombre_usuario: req.body.nombre_usuario,
                email: req.body.email,
                contrasena: req.body.contrasena,
                id_rol: req.body.id_rol
            };
            let result = await Usuario.update(updatedObject, { returning: true, where: { id_usuario: usuarioId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el usuario con id = " + req.params.id,
                    error: "No se pudo actualizar",
                });
            }

            res.status(200).json({
                message: "Usuario actualizado con éxito con id = " + usuarioId,
                usuario: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el usuario con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteUsuarioById = async (req, res) => {
    try {
        let usuarioId = req.params.id;
        let usuario = await Usuario.findByPk(usuarioId);

        if (!usuario) {
            res.status(404).json({
                message: "No existe un usuario con id = " + usuarioId,
                error: "404",
            });
        } else {
            await usuario.destroy();
            res.status(200).json({
                message: "Usuario eliminado con éxito con id = " + usuarioId,
                usuario: usuario,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el usuario con id = " + req.params.id,
            error: error.message,
        });
    }
};

// Controladores para Cliente
exports.createCliente = (req, res) => {
    let cliente = {};

    try {
        cliente.nombre = req.body.nombre;
        cliente.telefono = req.body.telefono;
        cliente.direccion = req.body.direccion;
        cliente.es_mayorista = req.body.es_mayorista;
        cliente.id_usuario = req.body.id_usuario;

        Cliente.create(cliente).then(result => {
            res.status(200).json({
                message: "Cliente creado con éxito con id = " + result.id_cliente,
                cliente: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

exports.retrieveAllClientes = (req, res) => {
    Cliente.findAll()
        .then(clienteInfos => {
            res.status(200).json({
                message: "Clientes recuperados con éxito!",
                clientes: clienteInfos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.getClienteById = (req, res) => {
    let clienteId = req.params.id;
    Cliente.findByPk(clienteId)
        .then(cliente => {
            res.status(200).json({
                message: "Cliente recuperado con éxito con id = " + clienteId,
                cliente: cliente
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.updateClienteById = async (req, res) => {
    try {
        let clienteId = req.params.id;
        let cliente = await Cliente.findByPk(clienteId);

        if (!cliente) {
            res.status(404).json({
                message: "No se encontró el cliente para actualizar con id = " + clienteId,
                cliente: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                nombre: req.body.nombre,
                telefono: req.body.telefono,
                direccion: req.body.direccion,
                es_mayorista: req.body.es_mayorista,
                id_usuario: req.body.id_usuario
            };
            let result = await Cliente.update(updatedObject, { returning: true, where: { id_cliente: clienteId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el cliente con id = " + req.params.id,
                    error: "No se pudo actualizar",
                });
            }

            res.status(200).json({
                message: "Cliente actualizado con éxito con id = " + clienteId,
                cliente: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el cliente con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteClienteById = async (req, res) => {
    try {
        let clienteId = req.params.id;
        let cliente = await Cliente.findByPk(clienteId);

        if (!cliente) {
            res.status(404).json({
                message: "No existe un cliente con id = " + clienteId,
                error: "404",
            });
        } else {
            await cliente.destroy();
            res.status(200).json({
                message: "Cliente eliminado con éxito con id = " + clienteId,
                cliente: cliente,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el cliente con id = " + req.params.id,
            error: error.message,
        });
    }
};

// Controladores para Pedido
exports.createPedido = (req, res) => {
    let pedido = {};

    try {
        pedido.id_cliente = req.body.id_cliente;
        pedido.fecha_pedido = req.body.fecha_pedido;
        pedido.total = req.body.total;
        pedido.id_usuario = req.body.id_usuario;

        Pedido.create(pedido).then(result => {
            res.status(200).json({
                message: "Pedido creado con éxito con id = " + result.id_pedido,
                pedido: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

exports.retrieveAllPedidos = (req, res) => {
    Pedido.findAll()
        .then(pedidoInfos => {
            res.status(200).json({
                message: "Pedidos recuperados con éxito!",
                pedidos: pedidoInfos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.getPedidoById = (req, res) => {
    let pedidoId = req.params.id;
    Pedido.findByPk(pedidoId)
        .then(pedido => {
            res.status(200).json({
                message: "Pedido recuperado con éxito con id = " + pedidoId,
                pedido: pedido
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.updatePedidoById = async (req, res) => {
    try {
        let pedidoId = req.params.id;
        let pedido = await Pedido.findByPk(pedidoId);

        if (!pedido) {
            res.status(404).json({
                message: "No se encontró el pedido para actualizar con id = " + pedidoId,
                pedido: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                id_cliente: req.body.id_cliente,
                fecha_pedido: req.body.fecha_pedido,
                total: req.body.total,
                id_usuario: req.body.id_usuario
            };
            let result = await Pedido.update(updatedObject, { returning: true, where: { id_pedido: pedidoId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el pedido con id = " + req.params.id,
                    error: "No se pudo actualizar",
                });
            }

            res.status(200).json({
                message: "Pedido actualizado con éxito con id = " + pedidoId,
                pedido: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el pedido con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deletePedidoById = async (req, res) => {
    try {
        let pedidoId = req.params.id;
        let pedido = await Pedido.findByPk(pedidoId);

        if (!pedido) {
            res.status(404).json({
                message: "No existe un pedido con id = " + pedidoId,
                error: "404",
            });
        } else {
            await pedido.destroy();
            res.status(200).json({
                message: "Pedido eliminado con éxito con id = " + pedidoId,
                pedido: pedido,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el pedido con id = " + req.params.id,
            error: error.message,
        });
    }
};

// Controladores para DetallePedido
exports.createDetallePedido = (req, res) => {
    let detallePedido = {};

    try {
        detallePedido.id_pedido = req.body.id_pedido;
        detallePedido.id_producto = req.body.id_producto;
        detallePedido.cantidad = req.body.cantidad;
        detallePedido.precio_unitario = req.body.precio_unitario;
        detallePedido.subtotal = req.body.subtotal;

        DetallePedido.create(detallePedido).then(result => {
            res.status(200).json({
                message: "Detalle de pedido creado con éxito con id = " + result.id_detalle,
                detallePedido: result,
            });
        });
    } catch (error) {
        res.status(500).json({
            message: "Error!",
            error: error.message
        });
    }
};

exports.retrieveAllDetallesPedido = (req, res) => {
    DetallePedido.findAll()
        .then(detallePedidoInfos => {
            res.status(200).json({
                message: "Detalles de pedidos recuperados con éxito!",
                detallesPedido: detallePedidoInfos
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.getDetallePedidoById = (req, res) => {
    let detallePedidoId = req.params.id;
    DetallePedido.findByPk(detallePedidoId)
        .then(detallePedido => {
            res.status(200).json({
                message: "Detalle de pedido recuperado con éxito con id = " + detallePedidoId,
                detallePedido: detallePedido
            });
        })
        .catch(error => {
            res.status(500).json({
                message: "Error!",
                error: error
            });
        });
};

exports.updateDetallePedidoById = async (req, res) => {
    try {
        let detallePedidoId = req.params.id;
        let detallePedido = await DetallePedido.findByPk(detallePedidoId);

        if (!detallePedido) {
            res.status(404).json({
                message: "No se encontró el detalle de pedido para actualizar con id = " + detallePedidoId,
                detallePedido: "",
                error: "404"
            });
        } else {
            let updatedObject = {
                id_pedido: req.body.id_pedido,
                id_producto: req.body.id_producto,
                cantidad: req.body.cantidad,
                precio_unitario: req.body.precio_unitario,
                subtotal: req.body.subtotal
            };
            let result = await DetallePedido.update(updatedObject, { returning: true, where: { id_detalle: detallePedidoId } });

            if (!result) {
                res.status(500).json({
                    message: "Error -> No se puede actualizar el detalle de pedido con id = " + req.params.id,
                    error: "No se pudo actualizar",
                });
            }

            res.status(200).json({
                message: "Detalle de pedido actualizado con éxito con id = " + detallePedidoId,
                detallePedido: updatedObject,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede actualizar el detalle de pedido con id = " + req.params.id,
            error: error.message
        });
    }
};

exports.deleteDetallePedidoById = async (req, res) => {
    try {
        let detallePedidoId = req.params.id;
        let detallePedido = await DetallePedido.findByPk(detallePedidoId);

        if (!detallePedido) {
            res.status(404).json({
                message: "No existe un detalle de pedido con id = " + detallePedidoId,
                error: "404",
            });
        } else {
            await detallePedido.destroy();
            res.status(200).json({
                message: "Detalle de pedido eliminado con éxito con id = " + detallePedidoId,
                detallePedido: detallePedido,
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Error -> No se puede eliminar el detalle de pedido con id = " + req.params.id,
            error: error.message,
        });
    }
};
