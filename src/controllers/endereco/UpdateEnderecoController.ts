import { Request, Response } from "express";
import { UpdateEnderecoService } from "../../services/endereco/UpdateEnderecoService";

class UpdateEnderecoController {
  async handle(request: Request, response: Response) {
    const { id, logradouro, numero, complemento, bairro, cidade, estado, cep } = request.body
    const updateEnderecoService = new UpdateEnderecoService()
    const endereco = await updateEnderecoService.execute({
      id,
      logradouro, 
      numero, 
      complemento, 
      bairro, 
      cidade, 
      estado, 
      cep
    })

    return response.json(endereco)
  }
}

export { UpdateEnderecoController };