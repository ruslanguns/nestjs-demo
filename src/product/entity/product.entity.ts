import {
  IsBoolean,
  IsDecimal,
  IsDefined,
  IsString,
  Length,
} from 'class-validator';
import { ArgsType, Field, ID, InputType, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateBase } from '../../lib/entity/date.entity';

@Entity()
@ObjectType({ description: 'Product data' })
export class Product extends DateBase {
  @Field()
  @Column()
  @IsString()
  name: string;

  @Field()
  @Column()
  @IsString()
  @Length(2, 255)
  description: string;

  @Field()
  @Column()
  @IsString()
  image: string;

  @Field()
  @Column()
  @IsString()
  barCode: string;

  @Field()
  @Column({ default: 0 })
  @IsDecimal()
  costPrice: number;

  @Field()
  @Column({ default: 0 })
  @IsDecimal()
  sellPrice: number;

  @Field()
  @IsDefined()
  @Column({ default: 5 })
  @IsDecimal()
  inStock: number;

  @Field()
  @Column({ default: 0, nullable: true })
  @IsDecimal()
  outStock?: number;

  @Field()
  @Column()
  @IsString()
  sellsMeasurement: string;

  /*  @Field()
  @ManyToOne(
    type => Category,
    category => category.products,
  ) // owner side stores the id of the related object.
  category: Category; */

  @Field()
  @Column()
  @IsBoolean()
  visibleOnShelve: string;
}

@InputType({ description: 'Product input data' })
export class ProductInput {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @IsString()
  email: string;

  @Field()
  @IsString()
  password: string;
}

@ArgsType()
export class ProductIdArgs {
  @Field(type => ID)
  @IsString()
  id: string;
}

@ArgsType()
export class ProductNameArgs {
  @Field()
  @IsString()
  title: string;
}
