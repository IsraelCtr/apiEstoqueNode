import mongoose from "mongoose";

function ManipuladorDeErros(error,req, res, next)  {
  console.log(error.stack); // Loga o erro no console
    if (error instanceof mongoose.CastError) {
         res.status(400).json({ message: 'ID inválido' });
       }
       else {
       res.status(500).json({ message: `id não localizado` });}
     next(error);
 }

export default ManipuladorDeErros;