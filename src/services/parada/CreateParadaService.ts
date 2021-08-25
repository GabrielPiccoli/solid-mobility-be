import { getCustomRepository } from "typeorm"
import { EnderecoRepositories } from "../../repositories/EnderecoRepositories"
import { ParadaRepositories } from "../../repositories/ParadaRepositories"
import { RotaRepositories } from "../../repositories/RotaRepositories"

interface IParadaRequest {
  endereco_id: string
  rota_id: string
  ponto_partida?: boolean
  ponto_final?: boolean
  motorista_id: string
}

class CreateParadaService {
  async execute({ endereco_id, rota_id, ponto_partida = false, ponto_final = false, motorista_id }: IParadaRequest) {
    const paradaRepositories = getCustomRepository(ParadaRepositories)
    const enderecoRepositories = getCustomRepository(EnderecoRepositories)
    const rotaRepositories = getCustomRepository(RotaRepositories)
    const enderecoExists = await enderecoRepositories.findOne(endereco_id)

    if (!enderecoExists) {
      throw new Error("Endereço inválido")
    }

    const rotaExists = await rotaRepositories.findOne(rota_id)

    if (!rotaExists) {
      throw new Error("Rota inválida")
    }

    const parada = paradaRepositories.create({
      endereco_id,
      rota_id,
      ponto_partida,
      ponto_final,
      motorista_id
    })
    await paradaRepositories.save(parada)

    return parada
  }
}

export { CreateParadaService }