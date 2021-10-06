import { Request, Response } from "express";
import { CreateEnderecoService } from "../../services/endereco/CreateEnderecoService";

class CreateEnderecoController {
  async handle(request: Request, response: Response) {
    const { logradouro, numero, complemento, bairro, cidade, estado, cep, coordinates } = request.body
    const { motorista_id } = request
    const createEndereceService = new CreateEnderecoService()
    const endereco = await createEndereceService.execute({ 
      logradouro, 
      numero, 
      complemento, 
      bairro, 
      cidade, 
      estado, 
      cep, 
      coordinates,
      motorista_id 
    })

    return response.json(endereco)
  }
}

export { CreateEnderecoController }