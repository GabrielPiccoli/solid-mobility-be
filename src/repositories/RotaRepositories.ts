import { EntityRepository, Repository } from "typeorm";
import { Rota } from "../entities/Rota";

@EntityRepository(Rota)
class RotaRepositories extends Repository<Rota> {}

export { RotaRepositories }