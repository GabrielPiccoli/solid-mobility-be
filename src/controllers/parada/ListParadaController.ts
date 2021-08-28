import { Request, Response } from "express";
import { ListParadaService } from "../../services/parada/ListParadaService";

class ListParadaController {
  async handle(request: Request, response: Response) {
    const listParadaService = new ListParadaService()
    const { motorista_id } = request
    const paradas = await listParadaService.execute(motorista_id)

    return response.json(paradas)
  }
}

export { ListParadaController }