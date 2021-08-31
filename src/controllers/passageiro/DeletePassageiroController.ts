import { Request, Response } from "express";
import { DeletePassageiroService } from "../../services/passageiro/DeletePassageiroService";

class DeletePassageiroController {
  async handle(request: Request, response: Response) {
    const { id } = request.body
    const deletePassageiroService = new DeletePassageiroService()
    const results = await deletePassageiroService.execute(id)

    return response.json(results)
  }
}

export { DeletePassageiroController }