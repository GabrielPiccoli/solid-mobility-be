import { Request, Response } from "express";
import { ListPassageiroService } from "../../services/passageiro/ListPassageiroService";

class ListPassageiroController {
  async handle(request: Request, response: Response) {
    const listPassageiroService = new ListPassageiroService()
    const { motorista_id } = request
    const passageiros = await listPassageiroService.execute(motorista_id)

    return response.json(passageiros)
  }
}

export { ListPassageiroController }