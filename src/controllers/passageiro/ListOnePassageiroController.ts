import { Request, Response } from "express";
import { ListOnePassageiroService } from "../../services/passageiro/ListOnePassageiroService";

class ListOnePassageiroController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const listOnePassageiroService = new ListOnePassageiroService()
    const passageiro = await listOnePassageiroService.execute(id)

    return response.json(passageiro)
  }
}

export { ListOnePassageiroController }