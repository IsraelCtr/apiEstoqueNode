import produtos from '../models/produto.js';

class ProdutoController {

  static async listarProdutos(req, res) {
    const listaProdutos = await produtos.find({});
    res.status(200).json(listaProdutos);
  }

  static async listarProdutoPorId(req, res) {
    const { id } = req.params;
    try {
      const produto = await produtos.findById(id);
      res.status(200).json(produto);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao buscar produto` });
    }
  }

  static async postarProduto(req, res) {
    try {
      const novoProduto = req.body;
      const produtoCriado = await produtos.create(novoProduto);
      res.status(201).json({
        message: "Produto criado com sucesso",
        produto: produtoCriado,
      });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - Falha ao cadastrar produto`,
      });
    }
  }

  static async atualizarProdutos(req, res) {
    try {
      const id = req.params.id;
      await produtos.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Produto atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao atualizar produto` });
    }
  }

  static async deletarProduto(req, res) {
    const { id } = req.params;
    try {
      await produtos.findByIdAndDelete(id);
      res.status(200).json({ message: 'Produto deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao deletar produto` });
    }
  }
}

export default ProdutoController;
