import { getCustomRepository } from "typeorm"
import { ParadaRepositories } from "../../repositories/ParadaRepositories"
import { PassageirosRepositories } from "../../repositories/PassageirosRepositories"

interface IPassageiroRequest {
  nome: string
  email: string
  cpf: string
  parada_id: string
  motorista_id: string
}

class CreatePassageiroService {
  async execute({ nome, email, cpf, parada_id, motorista_id}: IPassageiroRequest) {
    const passageirosRepositories = getCustomRepository(PassageirosRepositories)
    const paradasRepositories = getCustomRepository(ParadaRepositories)
    const passageiroAlreadyExists = await passageirosRepositories.findOne({ cpf })

    if (passageiroAlreadyExists) {
      throw new Error("Passageiro já cadastrado")
    }

    const paradaExists = await paradasRepositories.findOne(parada_id)

    if (!paradaExists) {
      throw new Error("Endereço de parada inexistente")
    }

    const passageiro = passageirosRepositories.create({
      nome,
      email,
      cpf,
      parada_id,
      motorista_id
    })
    await passageirosRepositories.save(passageiro)

    return passageiro
  }
}

export { CreatePassageiroService }