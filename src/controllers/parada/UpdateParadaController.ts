import { Request, Response } from "express";
import { UpdateParadaService } from "../../services/parada/UpdateParadaService";

class UpdateParadaController {
  async handle(request: Request, response: Response) {
    const { id, endereco_id, rota_id, ponto_partida, ponto_final } = request.body
    const updateParadaService = new UpdateParadaService()
    const parada = await updateParadaService.execute({
      id,
      endereco_id,
      rota_id,
      ponto_partida,
      ponto_final
    })

    return response.json(parada)
  }
}

export { UpdateParadaController }