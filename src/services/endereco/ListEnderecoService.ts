import { getCustomRepository } from "typeorm"
import { EnderecoRepositories } from "../../repositories/EnderecoRepositories"

class ListEnderecoService {
  async execute(motorista_id: string) {
    const enderecosRepostiories = getCustomRepository(EnderecoRepositories)
    const enderecos = await enderecosRepostiories.find({ motorista_id })

    return enderecos
  }
}

export { ListEnderecoService }