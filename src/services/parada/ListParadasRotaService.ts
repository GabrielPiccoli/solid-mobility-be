import { getCustomRepository } from "typeorm"
import { ParadaRepositories } from "../../repositories/ParadaRepositories"

class ListParadasRotaService {
  async execute(rota_id: string) {
    const paradasRepositories = getCustomRepository(ParadaRepositories)
    const paradas = await paradasRepositories.find({ 
      where: { rota_id },
      relations: ["endereco"] 
    })

    return paradas
  }
}

export { ListParadasRotaService }