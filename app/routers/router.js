let express = require('express');
let router = express.Router();

const controller = require('../controllers/student.controller.js');

/* Rutas para Categoria
router.post('/api/categorias/create', controller.createCategoria);
router.get('/api/categorias/all', controller.retrieveAllCategorias);
router.get('/api/categorias/onebyid/:id', controller.getCategoriaById);
router.put('/api/categorias/update/:id', controller.updateCategoriaById);
router.delete('/api/categorias/delete/:id', controller.deleteCategoriaById);

// Rutas para Producto
router.post('/api/products/create', controller.createProduct);
router.get('/api/products/all', controller.retrieveAllProducts);
router.get('/api/products/onebyid/:id', controller.getProductById);
router.get('/api/products/filterbyprice', controller.filterProductsByPrice);
router.get('/api/products/pagination', controller.paginationProducts);
router.get('/api/products/pagefiltersort', controller.pagingFilteringSortingProducts);
router.put('/api/products/update/:id', controller.updateProductById);
router.delete('/api/products/delete/:id', controller.deleteProductById);

// Rutas para Rol
router.post('/api/roles/create', controller.createRol);
router.get('/api/roles/all', controller.retrieveAllRoles);
router.get('/api/roles/onebyid/:id', controller.getRolById);
router.put('/api/roles/update/:id', controller.updateRolById);
router.delete('/api/roles/delete/:id', controller.deleteRolById);

// Rutas para Usuario
router.post('/api/usuarios/create', controller.createUsuario);
router.get('/api/usuarios/all', controller.retrieveAllUsuarios);
router.get('/api/usuarios/onebyid/:id', controller.getUsuarioById);
router.put('/api/usuarios/update/:id', controller.updateUsuarioById);
router.delete('/api/usuarios/delete/:id', controller.deleteUsuarioById);

// Rutas para Cliente
router.post('/api/clientes/create', controller.createCliente);
router.get('/api/clientes/all', controller.retrieveAllClientes);
router.get('/api/clientes/onebyid/:id', controller.getClienteById);
router.put('/api/clientes/update/:id', controller.updateClienteById);
router.delete('/api/clientes/delete/:id', controller.deleteClienteById);

// Rutas para Pedido
router.post('/api/pedidos/create', controller.createPedido);
router.get('/api/pedidos/all', controller.retrieveAllPedidos);
router.get('/api/pedidos/onebyid/:id', controller.getPedidoById);
router.put('/api/pedidos/update/:id', controller.updatePedidoById);
router.delete('/api/pedidos/delete/:id', controller.deletePedidoById);

// Rutas para DetallePedido
router.post('/api/detalles-pedido/create', controller.createDetallePedido);
router.get('/api/detalles-pedido/all', controller.retrieveAllDetallesPedido);
router.get('/api/detalles-pedido/onebyid/:id', controller.getDetallePedidoById);
router.put('/api/detalles-pedido/update/:id', controller.updateDetallePedidoById);
router.delete('/api/detalles-pedido/delete/:id', controller.deleteDetallePedidoById);*/

router.post('/api/students/create', controller.createStudent);

module.exports = router;
