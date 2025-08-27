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
    volts :{
        type: Number,
        enum: [110, 220, 380],
        required: [true, "A voltagem é obtigatoria"], 
    }
},
    {versionKey: false,});

const ferramentaEletrica = mongoose.model('ferramnetaEletrica', ferramentaEletricaSchema);
export  {ferramentaEletricaSchema, ferramentaEletrica};