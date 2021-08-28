import { Request, Response } from "express";
import { ListVanService } from "../../services/van/ListVanSerice";

class ListVanController {
  async handle(request: Request, response: Response) {
    const listVanService = new ListVanService()
    const { motorista_id } = request
    const vans = await listVanService.execute(motorista_id)

    return response.json(vans)
  }
}

export { ListVanController }