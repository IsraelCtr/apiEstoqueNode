import express from "express";
import produtoRoutes from './produtosRoutes.js'; // Importa o arquivo de rotas de produtos
import ferramentasEletricasRoutes from './ferramentasEletricasRoutes.js'; // Importa o arquivo de rotas de ferramentas elétricas

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "Curso de Node" }); // Resposta padrão para a rota raiz
  });

  app.use(express.json(),produtoRoutes,ferramentasEletricasRoutes); // Aqui você define o prefixo da rota

};

export default routes;
