import produtos from '../models/produto.js';

class ProdutoController {

  static async listarProdutos(req, res, next) {
    try{
      const listaProdutos = await produtos.find({});
    res.status(200).json(listaProdutos);
  }
  catch (error) {
    next(error); 
  }
  }

  static async listarProdutoPorId(req, res, next) {
    const { id } = req.params;  
    try {
      const produto = await produtos.findById(id);
      if (produto!== null || length(produto) > 24 ) {
        res.status(200).json(produto);}
      else {
         res.status(404).json({ message: 'Produto não encontrado' });
      }
    } catch (error) {
      next(error); // Passa o erro para o próximo middleware de tratamento de erros
     
    }
  }

  static async postarProduto(req, res, next) {
    try {
      const novoProduto = req.body;
      const produtoCriado = await produtos.create(novoProduto);
      res.status(201).json({message: "Produto criado com sucesso",produto: produtoCriado, });
    } catch (error) {
      next(error);
    }
  }

  static async atualizarProdutos(req, res, next) {
    try {
      const id = req.params.id;
      await produtos.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Produto atualizado com sucesso' });
    } catch (error) {
      next(error);
    }
  }

  static async deletarProduto(req, res, next) {
    const { id } = req.params;
    try {
      await produtos.findByIdAndDelete(id);
      res.status(200).json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
    next(error); 
    }
  }
  static async listarProdutoPorNome(req, res, next) {
    const  nome  = req.query.nome;
    try {
      const produto = await produtos.find({ nome: nome });
      res.status(200).json(produto);
    } catch (error) {
      next(error);
      //res.status(500).json({ message: `${error.message} - falha ao buscar produto` });
    }
  }
}

export default ProdutoController;
