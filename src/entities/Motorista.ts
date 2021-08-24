import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("motoristas")
class Motorista {
  @PrimaryColumn()
  readonly id: string

  @Column()
  nome: string

  @Column()
  email: string

  @Column()
  cnh: string

  @Exclude()
  @Column()
  senha: string

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Motorista }