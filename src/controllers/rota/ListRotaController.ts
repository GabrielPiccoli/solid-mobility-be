import { Request, Response } from "express";
import { ListRotaService } from "../../services/rota/ListRotaService";

class ListRotaController {
  async handle(request: Request, response: Response) {
    const listRotaService = new ListRotaService()
    const { motorista_id } = request
    const rotas = await listRotaService.execute(motorista_id)

    return response.json(rotas)
  }
}

export { ListRotaController }