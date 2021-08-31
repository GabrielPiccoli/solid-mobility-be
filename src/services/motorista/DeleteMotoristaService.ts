import { getCustomRepository } from "typeorm"
import { MotoristaRepositories } from "../../repositories/MotoristaRepositories"

class DeleteMotoristaService {
  async execute(id: string) {
    const motoristasRepositories = getCustomRepository(MotoristaRepositories)
    const motorista = await motoristasRepositories.findOne(id)

    if (!motorista) {
      throw new Error("Motorista inexistente")
    }

    const results = await motoristasRepositories.delete(id)

    return results
  }
}

export { DeleteMotoristaService }