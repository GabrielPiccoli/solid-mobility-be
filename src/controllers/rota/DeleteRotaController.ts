import { Request, Response } from "express";
import { DeleteRotaService } from "../../services/rota/DeleteRotaService";

class DeleteRotaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const deleteRotaService = new DeleteRotaService()
    const results = await deleteRotaService.execute(id)

    return response.json(results)
  }
}

export { DeleteRotaController }