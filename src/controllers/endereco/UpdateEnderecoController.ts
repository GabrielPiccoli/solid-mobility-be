import { Request, Response } from "express";
import { UpdateEnderecoService } from "../../services/endereco/UpdateEnderecoService";

class UpdateEnderecoController {
  async handle(request: Request, response: Response) {
    const { id, logradouro, numero, complemento, bairro, cidade, estado, cep, coordinates } = request.body
    const updateEnderecoService = new UpdateEnderecoService()
    const endereco = await updateEnderecoService.execute({
      id,
      logradouro, 
      numero, 
      complemento, 
      bairro, 
      cidade, 
      estado, 
      cep,
      coordinates
    })

    return response.json(endereco)
  }
}

export { UpdateEnderecoController };