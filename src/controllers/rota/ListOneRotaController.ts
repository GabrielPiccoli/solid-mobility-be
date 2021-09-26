import { Request, Response } from "express";
import { ListOneRotaService } from "../../services/rota/ListOneRotaService";

class ListOneRotaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const listOneRotaService = new ListOneRotaService()
    const rota = await listOneRotaService.execute(id)

    return response.json(rota)
  }
}

export { ListOneRotaController }