import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRota1629846941431 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "rotas",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "descricao",
                        type: "varchar"
                    },
                    {
                        name: "van_id",
                        type: "varchar"
                    },
                    {
                        name: "motorista_id",
                        type: "varchar"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKVanRota",
                        referencedTableName: "vans",
                        referencedColumnNames: ["id"],
                        columnNames: ["van_id"]
                    },
                    {
                        name: "FKMotoristaRota",
                        referencedTableName: "motoristas",
                        referencedColumnNames: ["id"],
                        columnNames: ["motorista_id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("rotas")
    }

}
