import express from 'express';
import conectiondatabase from './config/dbconect.js';
import Routes from './routes/index.js'; // Importando as rotas

import ManipuladorDeErros from './middleware/manipuladoDeErros.js';
import manipulador404 from './middleware/manipulador404.js';

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
app.use(manipulador404)
app.use(ManipuladorDeErros)



export default app; 