import express from 'express';
import conectiondatabase from './config/dbconect.js';
import Routes from './routes/index.js'; // Importando as rotas

const conection = await conectiondatabase(); // Conectando ao banco de dados MongoDB

conection.on('error', (err) => {
    console.error('Erro de conexão:', err);

});

conection.once("open", () => {
    console.log("Banco de dados conectado com sucesso!");
}
);

const app = express();

Routes(app);


app.post("/produtos",(req, res)=>{

    res.status(201).json(produtos); // Retorna o array atualizado de livros
})
app.get('/produtos/:id', (req, res) => {
    const index= buscarProdutoPorId((req.params.id));
    res.status(200).json(index); // Retorna o produto encontrado
});
app.put('/produtos/:id', (req, res) => {
const produto= buscarProdutoPorId(req.params.id);
    produto["quantidade"] = req.body.quantidade;
    res.status(200).json(produto); // Retorna o produto atualizado
});
app.delete('/produtos/:id', (req, res) => {
const produto= buscarProdutoPorId(req.params.id);
    produtos.splice(produto.id-1, 1); // Remove o produto do array de produtos
    res.status(200).send("produto deletado"); // Retorna o produto atualizado
});


export default app; 