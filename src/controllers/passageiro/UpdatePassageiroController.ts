import { Request, Response } from "express";
import { UpdatePassageiroService } from "../../services/passageiro/UpdatePassageiroService";

class UpdatePassageiroController {
  async handle(request: Request, response: Response) {
    const { id, nome, email, cpf, parada_id } = request.body
    const updatePassageiroService = new UpdatePassageiroService()
    const passageiro = await updatePassageiroService.execute({
      id,
      nome,
      email,
      cpf,
      parada_id
    })

    return response.json(passageiro)
  }
}

export { UpdatePassageiroController }