import { Request, Response } from "express";
import { AuthenticateMotoristaService } from "../../services/authenticate/AuthenticateMotoristaService";

class AuthenticateMotoristaController {
  async handle(request: Request, response: Response) {
    const { email, senha } = request.body
    const authenticateMotoristaService = new AuthenticateMotoristaService()
    const token = await authenticateMotoristaService.execute({
      email, 
      senha
    })

    return response.json(token)
  }
}

export { AuthenticateMotoristaController }