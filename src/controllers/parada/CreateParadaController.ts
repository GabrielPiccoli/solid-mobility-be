import { Request, Response } from "express";
import { CreateParadaService } from "../../services/parada/CreateParadaService";

class CreateParadaController {
  async handle(request: Request, response: Response) {
    const { endereco_id, rota_id, ponto_partida, ponto_final } = request.body
    const { motorista_id } = request
    const createParadaService = new CreateParadaService()
    const parada = await createParadaService.execute({ 
      endereco_id, 
      rota_id, 
      ponto_partida, 
      ponto_final, 
      motorista_id
    })

    return response.json(parada)
  }
}

export { CreateParadaController }