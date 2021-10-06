import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterAdressTable1633480608831 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "enderecos",
            new TableColumn({
                name: "coordinates",
                type: "varchar"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("enderecos", "coordinates")
    }

}
