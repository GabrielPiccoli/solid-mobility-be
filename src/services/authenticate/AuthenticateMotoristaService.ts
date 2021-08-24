import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { getCustomRepository } from "typeorm"
import { MotoristaRepositories } from "../../repositories/MotoristaRepositories"
import 'dotenv'

interface IAuthenticateRequest {
  email: string;
  senha: string;
}

class AuthenticateMotoristaService {
  async execute({email, senha}: IAuthenticateRequest) {
    const motoristaRepositories = getCustomRepository(MotoristaRepositories)
    const motorista = await motoristaRepositories.findOne({ email })

    if (!motorista) {
      throw new Error("Email/Senha incorretos")
    }
    
    const senhaMatch = await compare(senha, motorista.senha)
    
    if (!senhaMatch) {
      throw new Error("Email/Senha incorretos")
    }

    const token = sign(
      { email: motorista.email },
      process.env.TOKEN_SECRET,
      {
        subject: motorista.id,
        expiresIn: "1d"
      }
    )

    return token
  }
}

export { AuthenticateMotoristaService }