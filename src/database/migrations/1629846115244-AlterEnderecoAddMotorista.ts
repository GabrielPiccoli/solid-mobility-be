import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterEnderecoAddMotorista1629846115244 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "enderecos",
            new TableColumn({
                name: "motorista_id",
                type: "varchar"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("enderecos", "motorista_id")
    }

}
