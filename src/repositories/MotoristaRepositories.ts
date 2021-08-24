import { EntityRepository, Repository } from "typeorm";
import { Motorista } from "../entities/Motorista";

@EntityRepository(Motorista)
class MotoristaRepositories extends Repository<Motorista> {}

export { MotoristaRepositories }