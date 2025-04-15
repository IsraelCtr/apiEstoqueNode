import express from 'express';
import conectiondatabase from './config/dbconect.js';
import produto from './models/produto.js'; // Importando o modelo de produto


const conection = await conectiondatabase(); // Conectando ao banco de dados MongoDB

conection.on('error', (err) => {
    console.error('Erro de conexão:', err);

});

conection.once("open", () => {
    console.log("Banco de dados conectado com sucesso!");
}
);

const app = express();
app.use(express.json()); // Middleware para analisar o corpo das requisições como JSON





app.get('/', (req, res) => {
    res.status(200).send('curso de Node.js');
})

app.get('/produtos',async (req, res) => {
    const listaProdutos = await produto.find({}); // Busca todos os produtos no banco de dados
    res.status(200).json(listaProdutos);
})
app.post("/produtos",(req, res)=>{
    produtos.push(req.body); // Adiciona o novo livro ao array de livros
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


export default app; // Exportando o app para ser utilizado em outros arquivos
//mongodb+srv://israelCastro:Naoseiasenha.123@cluster0.prvuicn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 --conection mongoDB