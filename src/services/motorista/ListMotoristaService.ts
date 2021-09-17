import { classToPlain } from "class-transformer"
import { getCustomRepository } from "typeorm"
import { MotoristaRepositories } from "../../repositories/MotoristaRepositories"

class ListMotoristaService {
  async execute(id: string) {
    const motoristasRepositories = getCustomRepository(MotoristaRepositories)
    const motorista = await motoristasRepositories.findOne(id)

    return classToPlain(motorista)
  }
}

export { ListMotoristaService }