import { getCustomRepository } from "typeorm"
import { VanRepositories } from "../../repositories/VanRepositories"

class ListVanService {
  async execute(motorista_id: string) {
    const vansRepositories = getCustomRepository(VanRepositories)
    const vans = await vansRepositories.find({ motorista_id })

    return vans
  }
}

export { ListVanService }