import exppress from 'express';
 import livroController from '../controllers/livroController.js';

 const router = exppress.Router(); // Criando uma instância do roteador do Express

 router.get("/produtos", livroController.listarProdutos); // Rota para listar produtos