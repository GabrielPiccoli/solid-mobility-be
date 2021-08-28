import { hash } from "bcryptjs"
import { getCustomRepository } from "typeorm"
import { MotoristaRepositories } from "../../repositories/MotoristaRepositories"

interface IMotoristaRequest {
  id: string
  nome: string
  email: string
  cnh: string
  senha: string
}

class UpdateMotoristaService {
  async execute({ id, nome, email, cnh, senha }: IMotoristaRequest) {
    const motoristasRepositories = getCustomRepository(MotoristaRepositories)
    const motorista = await motoristasRepositories.findOne(id)

    if (!motorista) {
      throw new Error("Motorista inexistente")
    }

    const passwordHash = await hash(senha, 8)

    motoristasRepositories.merge(motorista, {
      nome, 
      email, 
      cnh, 
      senha: passwordHash
    })
    const newMotorista = await motoristasRepositories.save(motorista)

    return newMotorista
  }
}

export { UpdateMotoristaService }