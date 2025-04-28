import express from 'express';
 import ProdutoController from '../controller/produtoController.js'; // Importando o controlador de produtos

const routes = express.Router(); // Criando uma instância do roteador do Express//

 routes.get("/produtos", ProdutoController.listarProdutos); // Rota para listar produtos
 routes.get("/produtos/busca", ProdutoController.listarProdutoPorNome); // Rota para cadastrar um novo produto
 routes.post("/produtos", ProdutoController.postarProduto); // Rota para cadastrar um novo produto
 routes.put("/produtos/:id", ProdutoController.atualizarProdutos); // Rota para atualizar um produto
 routes.get("/produtos/:id", ProdutoController.listarProdutoPorId); // Rota para listar um produto por ID
 routes.delete("/produtos/:id", ProdutoController.deletarProduto); // Rota para deletar um produto

 export default routes; // Exportando as rotas para serem utilizadas em outros arquivos
