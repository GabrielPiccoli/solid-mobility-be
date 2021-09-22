import { getCustomRepository } from "typeorm"
import { VanRepositories } from "../../repositories/VanRepositories"

class ListOneVanService {
  async execute(id: string) {
    const vansRepositories = getCustomRepository(VanRepositories)
    const van = await vansRepositories.findOne(id)

    return van
  }
}

export { ListOneVanService }