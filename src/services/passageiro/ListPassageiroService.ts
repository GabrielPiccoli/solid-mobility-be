import { getCustomRepository } from "typeorm"
import { PassageirosRepositories } from "../../repositories/PassageirosRepositories"

class ListPassageiroService {
  async execute(motorista_id: string) {
    const passageirosRepositories = getCustomRepository(PassageirosRepositories)
    const passageiros = await passageirosRepositories.find({ motorista_id })

    return passageiros
  }
}

export { ListPassageiroService }