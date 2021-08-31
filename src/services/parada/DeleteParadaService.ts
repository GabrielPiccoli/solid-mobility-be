import { getCustomRepository } from "typeorm"
import { ParadaRepositories } from "../../repositories/ParadaRepositories"

class DeleteParadaService {
  async execute(id: string) {
    const paradasRepositories = getCustomRepository(ParadaRepositories)
    const parada = await paradasRepositories.findOne(id)

    if (!parada) {
      throw new Error("Parada inexistente")
    }

    const results = await paradasRepositories.delete(id)

    return results
  }
}

export { DeleteParadaService }