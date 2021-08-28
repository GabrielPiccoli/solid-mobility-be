import { Request, Response } from "express";
import { ListEnderecoService } from "../../services/endereco/ListEnderecoService";

class ListEnderecoController {
  async handle(request: Request, response: Response) {
    const listEnderecoService = new ListEnderecoService()
    const { motorista_id } = request
    const enderecos = await listEnderecoService.execute(motorista_id)

    return response.json(enderecos)
  }
}

export { ListEnderecoController }