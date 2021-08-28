import { Request, Response } from "express";
import { UpdateRotaService } from "../../services/rota/UpdateRotaService";

class UpdateRotaController {
  async handle(request: Request, response: Response) {
    const { id, descricao, van_id } = request.body
    const updateRotaService = new UpdateRotaService()
    const rota = await updateRotaService.execute({
      id,
      descricao,
      van_id
    })

    return response.json(rota)
  }
}

export { UpdateRotaController }