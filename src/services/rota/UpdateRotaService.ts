import { getCustomRepository } from "typeorm"
import { RotaRepositories } from "../../repositories/RotaRepositories"
import { VanRepositories } from "../../repositories/VanRepositories"

interface IRotaRequest {
  id: string
  descricao: string
  van_id: string
}

class UpdateRotaService {
  async execute({ id, descricao, van_id }: IRotaRequest) {
    const rotasRepositories = getCustomRepository(RotaRepositories)
    const vansRepositories = getCustomRepository(VanRepositories)
    const rota = await rotasRepositories.findOne(id)

    if (!rota) {
      throw new Error("Rota inexistente")
    }

    const vanExists = await vansRepositories.findOne(van_id)

    if (!vanExists) {
      throw new Error("Van inexistente")
    }

    rotasRepositories.merge(rota, {
      descricao, 
      van_id
    })
    const newRota = await rotasRepositories.save(rota)

    return newRota
  }
}

export { UpdateRotaService }