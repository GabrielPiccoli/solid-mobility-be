import { getCustomRepository } from "typeorm"
import { EnderecoRepositories } from "../../repositories/EnderecoRepositories"

class ListOneEnderecoService {
  async execute(id: string) {
    const enderecosRepostiories = getCustomRepository(EnderecoRepositories)
    const endereco = await enderecosRepostiories.findOne(id)

    return endereco
  }
}

export { ListOneEnderecoService }