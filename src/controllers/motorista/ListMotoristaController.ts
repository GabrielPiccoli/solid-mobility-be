import { Request, Response } from "express";
import { ListMotoristaService } from "../../services/motorista/ListMotoristaService";

class ListMotoristaController {
  async handle(request: Request, response: Response) {
    const listMotoristaService = new ListMotoristaService()
    const { motorista_id } = request
    const motorista = await listMotoristaService.execute(motorista_id)

    return response.json(motorista)
  }
}

export { ListMotoristaController }