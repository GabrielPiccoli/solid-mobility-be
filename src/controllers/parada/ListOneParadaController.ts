import { Request, Response } from "express";
import { ListOneParadaService } from "../../services/parada/ListOneParadaService";

class ListOneParadaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const listOneParadaService = new ListOneParadaService()
    const parada = await listOneParadaService.execute(id)

    return response.json(parada)
  }
}

export { ListOneParadaController }