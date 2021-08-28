import { getCustomRepository } from "typeorm"
import { ParadaRepositories } from "../../repositories/ParadaRepositories"
import { PassageirosRepositories } from "../../repositories/PassageirosRepositories"

interface IPassageiroRequest {
  id: string
  nome: string
  email: string
  cpf: string
  parada_id: string
}

class UpdatePassageiroService {
  async execute({ id, nome, email, cpf, parada_id }: IPassageiroRequest) {
    const passageirosRepositories = getCustomRepository(PassageirosRepositories)
    const paradasRepositories = getCustomRepository(ParadaRepositories)
    const passageiro = await passageirosRepositories.findOne(id)

    if (!passageiro) {
      throw new Error("Passageiro inexistente")
    }

    const paradaExists = await paradasRepositories.findOne(parada_id)

    if (!paradaExists) {
      throw new Error("Parada inexistente")
    }

    passageirosRepositories.merge(passageiro, {
      nome, 
      email, 
      cpf, 
      parada_id
    })
    const newPassageiro = await passageirosRepositories.save(passageiro)

    return newPassageiro
  }
}

export { UpdatePassageiroService }