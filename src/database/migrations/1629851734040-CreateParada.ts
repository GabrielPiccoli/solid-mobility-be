import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateParada1629851734040 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "paradas",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "endereco_id",
                        type: "varchar"
                    },
                    {
                        name: "rota_id",
                        type: "varchar"
                    },
                    {
                        name: "ponto_partida",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "ponto_final",
                        type: "boolean",
                        default: false
                    },
                    {
                        name: "motorista_id",
                        type: "varchar"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKEnderecoParada",
                        referencedTableName: "enderecos",
                        referencedColumnNames: ["id"],
                        columnNames: ["endereco_id"]
                    },
                    {
                        name: "FKRotaParada",
                        referencedTableName: "rotas",
                        referencedColumnNames: ["id"],
                        columnNames: ["rota_id"]
                    },
                    {
                        name: "FKMotoristaParada",
                        referencedTableName: "motoristas",
                        referencedColumnNames: ["id"],
                        columnNames: ["motorista_id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("paradas")
    }

}
