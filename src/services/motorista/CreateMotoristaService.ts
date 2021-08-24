import { hash } from "bcryptjs"
import { getCustomRepository } from "typeorm"
import { MotoristaRepositories } from "../../repositories/MotoristaRepositories"

interface IMotoristaRequest {
  nome: string
  email: string
  cnh: string
  senha: string
}

class CreateMotoristaService {
  async execute({ nome, email, cnh, senha }: IMotoristaRequest) {
    const motoristaRepositories = getCustomRepository(MotoristaRepositories)

    if (!email) {
      throw new Error("Email incorreto")
    }

    const motoristaAlreadyExists = await motoristaRepositories.findOne({ email })

    if (motoristaAlreadyExists) {
      throw new Error("Motorista já cadastrado")
    }

    const passwordHash = await hash(senha, 8)
    const motorista = motoristaRepositories.create({
      nome,
      email,
      cnh,
      senha: passwordHash,
    })
    await motoristaRepositories.save(motorista)

    return motorista
  }
}

export { CreateMotoristaService }