import "dotenv/config"; // Importando o dotenv para variáveis de ambiente
// Importing the http module
import app from './app.js'; // Importando o app do arquivo app.js


const hostname = 'LOCALHOST';
const port = 3000;




app.listen(port, hostname, () => {
    console.log(`Server runing in http://${hostname}:${port}/`);
});