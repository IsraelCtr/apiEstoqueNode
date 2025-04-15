import produto from '../models/produto.js';

class ProdutoController {
static async listarProdutos(req, res) {
    try {
        const listaProdutos = await produto.find({}); // Busca todos os produtos no banco de dados
        res.status(200).json(listaProdutos); // Retorna a lista de produtos
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar produtos', error }); // Retorna erro caso ocorra
    }
}
};

export default ProdutoController; // Exportando a classe ProdutoController para ser utilizada em outros arquivos