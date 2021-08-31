import { Request, Response } from "express";
import { DeleteParadaService } from "../../services/parada/DeleteParadaService";

class DeleteParadaController {
  async handle(request: Request, response: Response) {
    const { id } = request.body
    const deleteParadaService = new DeleteParadaService()
    const results = await deleteParadaService.execute(id)

    return response.json(results)
  }
}

export { DeleteParadaController }