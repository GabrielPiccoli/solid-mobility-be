import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm"
import { Motorista } from "./Motorista"
import { Van } from "./Van"
import { v4 as uuid } from 'uuid'

@Entity("rotas")
class Rota {
  @PrimaryColumn()
  readonly id: string

  @Column()
  descricao: string

  @Column()
  van_id: string

  @JoinColumn({ name: "van_id" })
  @ManyToOne(() => Van)
  van: Van

  @Column()
  motorista_id: string

  @JoinColumn({ name: "motorista_id" })
  @ManyToOne(() => Motorista)
  motorista: Motorista 

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Rota }