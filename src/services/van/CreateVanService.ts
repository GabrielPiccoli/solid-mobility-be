import { getCustomRepository } from "typeorm"
import { VanRepositories } from "../../repositories/VanRepositories"

interface IVanRequest {
  placa: string
  lotacao: number
  marca: string
  motorista_id: string
}

class CreateVanService {
  async execute({ placa, lotacao, marca, motorista_id }: IVanRequest) {
    const vanRepositories = getCustomRepository(VanRepositories)
    const vanExists = await vanRepositories.findOne({ placa })

    if (vanExists) {
      throw new Error("Van já cadastrada")
    }

    const van = vanRepositories.create({
      placa,
      lotacao,
      marca,
      motorista_id
    })
    await vanRepositories.save(van)

    return van
  }
}

export { CreateVanService }