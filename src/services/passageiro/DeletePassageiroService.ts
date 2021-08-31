import { getCustomRepository } from "typeorm"
import { PassageirosRepositories } from "../../repositories/PassageirosRepositories"

class DeletePassageiroService {
  async execute(id: string) {
    const passageirosRepositories = getCustomRepository(PassageirosRepositories)
    const passageiro = await passageirosRepositories.findOne(id)

    if (!passageiro) {
      throw new Error("Passageiro inexistente")
    }

    const results = await passageirosRepositories.delete(id)

    return results
  }
}

export { DeletePassageiroService }