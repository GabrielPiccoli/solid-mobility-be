import { getCustomRepository } from "typeorm"
import { ParadaRepositories } from "../../repositories/ParadaRepositories"

class ListParadaService {
  async execute(motorista_id: string) {
    const paradasRepositories = getCustomRepository(ParadaRepositories)
    const paradas = await paradasRepositories.find({ 
      where: { motorista_id },
      relations: ["endereco"] 
    })

    return paradas
  }
}

export { ListParadaService }