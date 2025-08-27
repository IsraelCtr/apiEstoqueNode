import mongoose from "mongoose";
import ErrorBase from "../errors/errosBase.js";
import NaoEncontrado from "../errors/naoEncotrado.js";
import VoltsInvalido from "../errors/voltsInvalido.js";
function ManipuladorDeErros(error,req, res, next)  {
  console.log(error.stack); // Loga o erro no console
    if (error instanceof mongoose.CastError) {
         res.status(400).json({ message: 'ID inválido' });
       } else if (error instanceof mongoose.Error.ValidationError) {
        new VoltsInvalido(error).enviarResposta(res);
       } else if (error instanceof NaoEncontrado) {
        error.enviarResposta(res);
      }
      
      else{
       new ErrorBase().enviarResposta(res);}
      }  
    

export default ManipuladorDeErros;