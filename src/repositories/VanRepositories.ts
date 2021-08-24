import { EntityRepository, Repository } from "typeorm";
import { Van } from "../entities/Van";

@EntityRepository(Van)
class VanRepositories extends Repository<Van> {}

export { VanRepositories }