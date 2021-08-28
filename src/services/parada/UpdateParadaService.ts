import { getCustomRepository } from "typeorm"
import { EnderecoRepositories } from "../../repositories/EnderecoRepositories"
import { ParadaRepositories } from "../../repositories/ParadaRepositories"
import { RotaRepositories } from "../../repositories/RotaRepositories"

interface IParadaRequest {
  id: string
  endereco_id: string
  rota_id: string
  ponto_partida?: boolean
  ponto_final?: boolean
}

class UpdateParadaService {
  async execute({ id, endereco_id, rota_id, ponto_partida = false, ponto_final = false }: IParadaRequest) {
    const paradasRepositories = getCustomRepository(ParadaRepositories)
    const enderecosRepositories = getCustomRepository(EnderecoRepositories)
    const rotasRepositories = getCustomRepository(RotaRepositories)
    const parada = await paradasRepositories.findOne(id)

    if (!parada) {
      throw new Error("Parada inexistente")
    }

    if (ponto_final && ponto_partida) {
      throw new Error("Uma parada não pode ser Partida e Final")
    }

    const enderecoExists = await enderecosRepositories.findOne(endereco_id)

    if (!enderecoExists) {
      throw new Error("Endereço inexistente")
    }

    const rotaExists = await rotasRepositories.findOne(rota_id)

    if (!rotaExists) {
      throw new Error("Rota inexistente")
    }

    paradasRepositories.merge(parada, {
      endereco_id,
      rota_id,
      ponto_partida,
      ponto_final
    })
    const newParada = await paradasRepositories.save(parada)

    return newParada
  }
}

export { UpdateParadaService }