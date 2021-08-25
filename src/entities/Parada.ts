import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Endereco } from "./Endereco";
import { Motorista } from "./Motorista";
import { Rota } from "./Rota";
import { v4 as uuid } from 'uuid'

@Entity("paradas")
class Parada {
  @PrimaryColumn()
  readonly id: string

  @Column()
  endereco_id: string

  @JoinColumn({ name: "endereco_id"})
  @ManyToOne(() => Endereco)
  endereco: Endereco

  @Column()
  rota_id: string

  @JoinColumn({ name: "rota_id"})
  @ManyToOne(() => Rota)
  rota: Rota

  @Column()
  ponto_partida: boolean

  @Column()
  ponto_final: boolean

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

export { Parada }