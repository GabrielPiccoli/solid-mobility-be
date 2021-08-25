import { getCustomRepository } from "typeorm"
import { EnderecoRepositories } from "../../repositories/EnderecoRepositories"

interface IEnderecoRequest {
  logradouro: string
  numero: number
  complemento?: string
  bairro: string
  cidade: string
  estado: string
  cep: string
  motorista_id: string
}

class CreateEnderecoService {
 async execute({ logradouro, numero, complemento = null, bairro, cidade, estado, cep, motorista_id }: IEnderecoRequest) {
   const enderecoRepositories = getCustomRepository(EnderecoRepositories)

   if (!logradouro || !numero || !bairro || !cidade || !estado || !cep) {
     throw new Error("Existem informações em falta")
   }

   const endereco = enderecoRepositories.create({
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
    cep,
    motorista_id
   })
   await enderecoRepositories.save(endereco)

   return endereco
 }
}

export { CreateEnderecoService }