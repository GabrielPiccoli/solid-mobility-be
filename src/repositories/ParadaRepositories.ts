import { EntityRepository, Repository } from "typeorm";
import { Parada } from "../entities/Parada";

@EntityRepository(Parada)
class ParadaRepositories extends Repository<Parada> {}

export { ParadaRepositories }