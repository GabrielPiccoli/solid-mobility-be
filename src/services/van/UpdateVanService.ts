import { getCustomRepository } from "typeorm"
import { VanRepositories } from "../../repositories/VanRepositories"

interface IVanRequest {
  id: string
  placa: string
  lotacao: number
  marca: string
}

class UpdateVanService {
  async execute({ id, placa, lotacao, marca }: IVanRequest) {
    const vansRepositories = getCustomRepository(VanRepositories)
    const van = await vansRepositories.findOne(id)

    if (!van) {
      throw new Error("Van inexistente")
    }

    vansRepositories.merge(van, { 
      placa, 
      lotacao, 
      marca
    })
    const newVan = await vansRepositories.save(van)

    return newVan
  }
}

export { UpdateVanService }