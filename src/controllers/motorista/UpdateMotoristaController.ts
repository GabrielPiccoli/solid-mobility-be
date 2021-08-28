import { Request, Response } from "express";
import { UpdateMotoristaService } from "../../services/motorista/UpdateMotoristaService";

class UpdateMotoristaController {
  async handle(request: Request, response: Response) {
    const { nome, email, cnh, senha } = request.body
    const { motorista_id } = request
    const updateMotoristaService = new UpdateMotoristaService()
    const motorista = await updateMotoristaService.execute({
      id: motorista_id,
      nome, 
      email,
      cnh,
      senha
    })

    return response.json(motorista)
  }
}

export { UpdateMotoristaController }