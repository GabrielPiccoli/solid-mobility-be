import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateVan1629640967509 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "vans",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "placa",
                        type: "varchar"
                    },
                    {
                        name: "lotacao",
                        type: "int"
                    },
                    {
                        name: "marca",
                        type: "varchar"
                    },
                    {
                        name: "motorista_id",
                        type: "varchar"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKMotoristaVan",
                        referencedTableName: "motoristas",
                        referencedColumnNames: ["id"],
                        columnNames: ["motorista_id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("vans")
    }

}
