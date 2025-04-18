import mongoose from 'mongoose';

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
},
    {versionKey: false,});

const produto = mongoose.model('produtos', produtoSchema);
export default produto;