import { getCustomRepository } from "typeorm"
import { RotaRepositories } from "../../repositories/RotaRepositories"

class ListOneRotaService {
  async execute(id: string) {
    const rotasRepositories = getCustomRepository(RotaRepositories)
    const rotas = await rotasRepositories.findOne(id)

    return rotas
  }
}

export { ListOneRotaService }