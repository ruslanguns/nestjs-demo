import {
  IsBoolean,
  IsDecimal,
  IsDefined,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
  IsNumber,
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
  @IsNotEmpty()
  name: string;

  @Field()
  @Column()
  @IsString()
  @Length(2, 255)
  @IsNotEmpty()
  description: string;

  @Field()
  @Column()
  @IsString()
  @IsNotEmpty()
  image: string;

  @Field()
  @Column()
  @IsString()
  @IsNotEmpty()
  barCode: string;

  @Field()
  @Column({ default: 0 })
  @IsDecimal()
  @IsNotEmpty()
  costPrice: number;

  @Field()
  @Column({ default: 0 })
  @IsDecimal()
  @IsNotEmpty()
  sellPrice: number;

  @Field()
  @IsDefined()
  @Column({ default: 5 })
  @IsDecimal()
  @IsNotEmpty()
  inStock: number;

  @Field()
  @Column({ default: 0, nullable: true })
  @IsDecimal()
  outStock?: number;

  @Field()
  @Column()
  @IsString()
  @IsNotEmpty()
  sellsMeasurement: string;

  /*  @Field()
  @ManyToOne(
    type => Category,
    category => category.products,
  ) // owner side stores the id of the related object.
  category: Category; */

  @Field()
  @Column({ default: false, nullable: true })
  @IsBoolean()
  visibleOnShelve: string;
}

@InputType({ description: 'Product input data' })
export class ProductInput extends Product {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;
}

@ArgsType()
export class ProductArgs {
  @Field(type => ID, { nullable: true })
  @PrimaryGeneratedColumn('uuid')
  @IsString()
  @IsUUID()
  id?: string;

  @Field({ nullable: true })
  @IsString()
  title?: string;
}

export class ProductFilterArgs {
  @Field({ nullable: true })
  @IsString()
  filterBy?: string;

  @Field({ nullable: true })
  @IsNumber()
  skip?: number;
}
