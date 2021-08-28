import { getCustomRepository } from "typeorm"
import { EnderecoRepositories } from "../../repositories/EnderecoRepositories"

interface IEnderecoRequest {
  id: string
  logradouro: string
  numero: number
  complemento?: string
  bairro: string
  cidade: string
  estado: string
  cep: string
}

class UpdateEnderecoService {
  async execute({ id, logradouro, numero, complemento = "", bairro, cidade, estado, cep }: IEnderecoRequest) {
    const enderecosRepositories = getCustomRepository(EnderecoRepositories)
    const endereco = await enderecosRepositories.findOne(id)

    if (!endereco) {
      throw new Error("Endereço inexistente")
    }

    enderecosRepositories.merge(endereco, {
      logradouro, 
      numero, 
      complemento,
      bairro,
      cidade,
      estado,
      cep
    })
    const newEndereco = await enderecosRepositories.save(endereco)

    return newEndereco
  }
}

export { UpdateEnderecoService }