import ErrorBase from "./errosBase.js";

class NaoEncontrado extends ErrorBase{
  constructor() {
    super("pagina não encontrada", 404);
  }
}

export default NaoEncontrado;