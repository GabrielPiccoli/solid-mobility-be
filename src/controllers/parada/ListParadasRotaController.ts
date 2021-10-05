import { Request, Response } from "express";
import { ListParadasRotaService } from "../../services/parada/ListParadasRotaService";

class ListParadasRotaController {
  async handle(request: Request, response: Response) {
    const listParadasRotaService = new ListParadasRotaService()
    const { id } = request.params
    const paradas = await listParadasRotaService.execute(id)

    return response.json(paradas)
  }
}

export { ListParadasRotaController }