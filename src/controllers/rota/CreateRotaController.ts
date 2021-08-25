import { Request, Response } from "express";
import { CreateRotaService } from "../../services/rota/CreateRotaService";

class CreateRotaController {
  async handle(request: Request, response: Response) {
    const { descricao, van_id } = request.body
    const { motorista_id } = request
    const createRotaService = new CreateRotaService()
    const rota = await createRotaService.execute({
      descricao,
      van_id,
      motorista_id
    })

    return response.json(rota)
  }
}

export { CreateRotaController }