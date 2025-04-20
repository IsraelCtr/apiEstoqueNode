import {ferramentaEletrica} from '../models/FerramentaEletrica.js';

class FerramentaEletricaController {
    static async listarFerramentas(req, res) {
        const listaFerramentas = await ferramentaEletrica.find({}); // Busca todos os produtos no banco de dados
        res.status(200).json(listaFerramentas); // Retorna a lista de produtos
    };

    static async listarFerramentaPorId(req, res) {
        const { id } = req.params; // Obtém o ID do produto a ser buscado
        try {
            const ferramenta = await ferramentaEletrica.findById(id); // Busca o produto pelo ID
            res.status(200).json(ferramenta); // Retorna o produto encontrado
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao buscar produto` }); // Retorna um erro caso ocorra
        }
    }
 static async postarFerramenta(req, res) {
        try {const novaFerramenta = await ferramentaEletrica.create(req.body); // Cria um novo produto com os dados do corpo da requisiçãoq
            res.status(201).json({message: "criado com sucesso",ferramentaeletrica:novaFerramenta}); // Retorna o produto criado
        }catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar produto` }); // Retorna um erro caso ocorra
        }       
    }
    static async deletarFerramenta(req, res) {
        const {id}  = req.params; // Obtém o ID do produto a ser deletado
        try {
            await ferramentaEletrica.findByIdAndDelete(id); // Deleta o produto do banco de dados
            res.status(200).json({ message: 'Produto deletado com sucesso' }); // Retorna uma mensagem de sucesso
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao deletar produto` }); // Retorna um erro caso ocorra
        }
    }
}
export default FerramentaEletricaController; // Exportando a classe ProdutoController para ser utilizada em outros arquivos