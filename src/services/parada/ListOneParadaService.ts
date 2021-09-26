import { getCustomRepository } from "typeorm"
import { ParadaRepositories } from "../../repositories/ParadaRepositories"

class ListOneParadaService {
  async execute(id: string) {
    const paradasRepositories = getCustomRepository(ParadaRepositories)
    const parada = await paradasRepositories.findOne(id)

    return parada
  }
}

export { ListOneParadaService }