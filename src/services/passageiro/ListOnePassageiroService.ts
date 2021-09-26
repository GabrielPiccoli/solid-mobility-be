import { getCustomRepository } from "typeorm"
import { PassageirosRepositories } from "../../repositories/PassageirosRepositories"

class ListOnePassageiroService {
  async execute(id: string) {
    const passageirosRepositories = getCustomRepository(PassageirosRepositories)
    const passageiro = await passageirosRepositories.findOne(id)

    return passageiro
  }
}

export { ListOnePassageiroService }