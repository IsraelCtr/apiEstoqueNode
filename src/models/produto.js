import mongoose from 'mongoose';
import { ferramentaEletricaSchema } from './FerramentaEletrica.js';


const produtoSchema = new mongoose.Schema({

    id : {type: mongoose.Schema.Types.ObjectId},

    nome: {
        type: String,
        required: [true, "O nome do produto é obrigatório"],
    },
    marca: {
        type: String,
        required: [true, "A marca é obrigatória"],
    },
    preco: {
        type: Number,
        required: [true, "O preço é obrigatório"],
    },
    quantidade: {
        type: Number,
        required: [true, "A quantidade é obrigatória"],
    },
    ferramentaEletrica: ferramentaEletricaSchema
},
    {versionKey: false,});

const produtos = mongoose.model('produto', produtoSchema);
export default produtos;