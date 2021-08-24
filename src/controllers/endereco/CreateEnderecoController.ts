import { Request, Response } from "express";
import { CreateEnderecoService } from "../../services/endereco/CreateEnderecoService";

class CreateEnderecoController {
  async handle(request: Request, response: Response) {
    const { logradouro, numero, complemento, bairro, cidade, estado, cep } = request.body
    const createEndereceService = new CreateEnderecoService()
    const endereco = await createEndereceService.execute({ logradouro, numero, complemento, bairro, cidade, estado, cep })

    return response.json(endereco)
  }
}

export { CreateEnderecoController }