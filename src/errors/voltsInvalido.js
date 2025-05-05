import ErrorBase from "./errosBase.js";

class VoltsInvalido extends ErrorBase {
    constructor(error) {

        const mensagemDeErro = Object.values(error.errors).map((erro) => erro.message)
        .join(', ');
        super(400, `${mensagemDeErro}`);
        
    }
}
export default VoltsInvalido;