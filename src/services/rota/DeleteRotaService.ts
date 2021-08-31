import { getCustomRepository } from "typeorm"
import { RotaRepositories } from "../../repositories/RotaRepositories"

class DeleteRotaService {
  async execute(id: string) {
    const rotasRepositories = getCustomRepository(RotaRepositories)
    const rota = await rotasRepositories.findOne(id)

    if (!rota) {
      throw new Error("Rota inexistente")
    }

    const results = await rotasRepositories.delete(id)

    return results
  }
}

export { DeleteRotaService }