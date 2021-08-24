import { Request, Response } from "express";
import { CreateMotoristaService } from "../../services/motorista/CreateMotoristaService";

class CreateMotoristaController {
  async handle(request: Request, response: Response) {
    const { nome, email, cnh, senha } = request.body
    const createMotoristaService = new CreateMotoristaService()
    const motorista = await createMotoristaService.execute({ nome, email, cnh, senha })

    return response.json(motorista)
  }
}

export { CreateMotoristaController }