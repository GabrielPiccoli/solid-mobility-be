import { getCustomRepository } from "typeorm"
import { VanRepositories } from "../../repositories/VanRepositories"

class DeleteVanService {
  async execute(id: string) {
    const vansRepositories = getCustomRepository(VanRepositories)
    const van = await vansRepositories.findOne(id)

    if (!van) {
      throw new Error("Van inexistente")
    }

    const results = await vansRepositories.delete(id)

    return results
  }
}

export { DeleteVanService }