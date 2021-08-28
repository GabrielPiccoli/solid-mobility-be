import { Request, Response } from "express";
import { UpdateVanService } from "../../services/van/UpdateVanService";

class UpdateVanController {
  async handle(request: Request, response: Response) {
    const { id, placa, lotacao, marca } = request.body
    const updateVanService = new UpdateVanService()
    const van = await updateVanService.execute({
      id,
      placa, 
      lotacao, 
      marca 
    })

    return response.json(van)
  }
}

export { UpdateVanController }