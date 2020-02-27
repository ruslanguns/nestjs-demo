import {MigrationInterface, QueryRunner} from "typeorm";

export class CategoryRefactor1582715357531 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE 'category' RENAME COLUMN 'title' TO 'name'`)
    }
    
    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE 'category' RENAME COLUMN 'name' TO 'title'`)
    }

}
