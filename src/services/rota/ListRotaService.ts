import { getCustomRepository } from "typeorm"
import { RotaRepositories } from "../../repositories/RotaRepositories"

class ListRotaService {
  async execute(motorista_id: string) {
    const rotasRepositories = getCustomRepository(RotaRepositories)
    const rotas = await rotasRepositories.find({ motorista_id })

    return rotas
  }
}

export { ListRotaService }