import { Request, Response } from "express";
import { CreateVanService } from "../../services/van/CreateVanService";

class CreateVanController {
  async handle(request: Request, response: Response) {
    const { placa, lotacao, marca } = request.body
    const { motorista_id } = request
    const createVanService = new CreateVanService()
    const van = await createVanService.execute({
      placa,
      lotacao,
      marca,
      motorista_id
    })

    return response.json(van)
  }
}

export { CreateVanController }