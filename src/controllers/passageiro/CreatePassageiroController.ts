import { Request, Response } from "express";
import { CreatePassageiroService } from "../../services/passageiro/CreatePassageiroService";

class CreatePassageiroController {
  async handle(request: Request, response: Response) {
    const { nome, email, cpf, parada_id } = request.body
    const { motorista_id } = request
    const createPassageiroService = new CreatePassageiroService()
    const passageiro = await createPassageiroService.execute({ nome, email, cpf, parada_id, motorista_id })

    return response.json(passageiro)
  }
}

export { CreatePassageiroController }