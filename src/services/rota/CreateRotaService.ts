import { getCustomRepository } from "typeorm"
import { RotaRepositories } from "../../repositories/RotaRepositories"

interface IRotaRequest {
  descricao: string
  van_id: string
  motorista_id: string
}

class CreateRotaService {
  async execute({ descricao, van_id, motorista_id }: IRotaRequest) {
    const rotaRepositories = getCustomRepository(RotaRepositories)

    if (!van_id) {
      throw new Error("Van inválida")
    }

    const rota = rotaRepositories.create({
      descricao,
      van_id,
      motorista_id
    })
    await rotaRepositories.save(rota)

    return rota
  }
}

export { CreateRotaService }