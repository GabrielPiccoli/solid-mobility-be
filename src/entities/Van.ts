import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Motorista } from "./Motorista";
import { v4 as uuid } from 'uuid'

@Entity("vans")
class Van {
  @PrimaryColumn()
  readonly id: string

  @Column()
  placa: string

  @Column()
  lotacao: number

  @Column()
  marca: string

  @Column()
  motorista_id: string

  @JoinColumn({ name: "motorista_id"})
  @ManyToOne(() => Motorista)
  motorista: Motorista

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Van }