import mongoose from 'mongoose';
import { ferramentaEletricaSchema } from './FerramentaEletrica.js';


const produtoSchema = new mongoose.Schema({

    id : {type: mongoose.Schema.Types.ObjectId},

    nome: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    quantidade: {
        type: Number,
        required: true,
    },
    ferramentaEletrica: ferramentaEletricaSchema
},
    {versionKey: false,});

const produtos = mongoose.model('produto', produtoSchema);
export default produtos;