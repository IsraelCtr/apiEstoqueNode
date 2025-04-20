import mongoose from 'mongoose';

const ferramentaEletricaSchema = new mongoose.Schema({

    especificacoesTecnicas:{
        type: String,
        required: true,

    },
    descricao:{
        type: String,
        required: true,
    },
},
    {versionKey: false,});

const ferramentaEletrica = mongoose.model('ferramnetaEletrica', ferramentaEletricaSchema);
export  {ferramentaEletricaSchema, ferramentaEletrica};