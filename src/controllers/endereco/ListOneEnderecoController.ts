import { Request, Response } from "express";
import { ListOneEnderecoService } from "../../services/endereco/ListOneEnderecoService";

class ListOneEnderecoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const listEnderecoService = new ListOneEnderecoService()
    const endereco = await listEnderecoService.execute(id)

    return response.json(endereco)
  }
}

export { ListOneEnderecoController }