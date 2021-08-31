import { Request, Response } from "express";
import { DeleteVanService } from "../../services/van/DeleteVanService";

class DeleteVanController {
  async handle(request: Request, response: Response) {
    const { id } = request.body
    const deleteVanService = new DeleteVanService()
    const results = await deleteVanService.execute(id)

    return response.json(results)
  }
}

export { DeleteVanController }