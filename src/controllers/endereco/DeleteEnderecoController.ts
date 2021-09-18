import { Request, Response } from 'express'
import { DeleteEnderecoService } from "../../services/endereco/DeleteEnderecoService";

class DeleteEnderecoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const deleteEnderecoService = new DeleteEnderecoService()
    const results = await deleteEnderecoService.execute(id)

    return response.json(results)
  }
}

export { DeleteEnderecoController }