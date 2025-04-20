import express from 'express';
import FerramentaEletricaController from '../controller/ferramentaEletricaController.js'; // Importando o controlador de ferramentas elétricas

const routes = express.Router(); // Criando uma instância do roteador do Express
routes.get("/ferramentasEletricas", FerramentaEletricaController.listarFerramentas); // Rota para listar ferramentas elétricas
routes.post("/ferramentasEletricas", FerramentaEletricaController.postarFerramenta); // Rota para cadastrar uma nova ferramenta elétrica
routes.put("/ferramentasEletricas/:id", FerramentaEletricaController.postarFerramenta); // Rota para atualizar uma ferramenta elétrica
routes.get("/ferramentasEletricas/:id", FerramentaEletricaController.listarFerramentaPorId); // Rota para listar uma ferramenta elétrica por ID 
routes.delete("/ferramentasEletricas/:id", FerramentaEletricaController.deletarFerramenta); // Rota para deletar uma ferramenta elétrica

export default routes; // Exportando as rotas para serem utilizadas em outros arquivos