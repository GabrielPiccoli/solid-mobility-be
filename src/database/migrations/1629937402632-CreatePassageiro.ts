import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePassageiro1629937402632 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "passageiros",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "cpf",
                        type: "varchar"
                    },
                    {
                        name: "parada_id",
                        type: "varchar"
                    },
                    {
                        name: "motorista_id",
                        type: "varchar"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKParadaPassageiro",
                        referencedTableName: "paradas",
                        referencedColumnNames: ["id"],
                        columnNames: ["parada_id"]
                    },
                    {
                        name: "FKMotoristaPassageiro",
                        referencedTableName: "motoristas",
                        referencedColumnNames: ["id"],
                        columnNames: ["motorista_id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("passageiros")
    }

}
