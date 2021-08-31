import { getCustomRepository } from "typeorm"
import { EnderecoRepositories } from "../../repositories/EnderecoRepositories"

class DeleteEnderecoService {
  async execute(id: string) {
    const enderecosRepositories = getCustomRepository(EnderecoRepositories)
    const endereco = await enderecosRepositories.findOne(id)

    if (!endereco) {
      throw new Error("Endereço inexistente")
    }

    const results = await enderecosRepositories.delete(id)
    
    return results
  }
}

export { DeleteEnderecoService }