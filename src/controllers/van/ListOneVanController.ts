import { Request, Response } from "express";
import { ListOneVanService } from "../../services/van/ListOneVanService";

class ListOneVanController {
  async handle(request: Request, response: Response) {
    const listVanService = new ListOneVanService()
    const { id } = request.body
    const van = await listVanService.execute(id)

    return response.json(van)
  }
}

export { ListOneVanController }