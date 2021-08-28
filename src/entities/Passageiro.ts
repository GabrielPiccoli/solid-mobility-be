import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Motorista } from "./Motorista";
import { Parada } from "./Parada";
import { v4 as uuid } from "uuid";

@Entity("passageiros")
class Passageiro {
  @PrimaryColumn()
  readonly id: string
  
  @Column()
  nome: string
  
  @Column()
  email: string
  
  @Column()
  cpf: string
  
  @Column()
  parada_id: string

  @JoinColumn({ name: "parada_id" })
  @ManyToOne(() => Parada)
  parada: Parada

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

export { Passageiro }