import { EntityRepository, Repository } from "typeorm";
import { Passageiro } from "../entities/Passageiro";

@EntityRepository(Passageiro)
class PassageirosRepositories extends Repository<Passageiro> {}

export { PassageirosRepositories }