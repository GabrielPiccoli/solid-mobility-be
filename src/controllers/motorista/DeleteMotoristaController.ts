import { Request, Response } from "express";
import { DeleteMotoristaService } from "../../services/motorista/DeleteMotoristaService";

class DeleteMotoristaController {
  async handle(request: Request, response: Response) {
    const { motorista_id } = request
    const deleteMotoristaService = new DeleteMotoristaService()
    const results = await deleteMotoristaService.execute(motorista_id)

    return response.json(results)
  }
}

export { DeleteMotoristaController }