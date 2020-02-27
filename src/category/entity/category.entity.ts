import { IsString, Length, MaxLength } from 'class-validator';
import { ArgsType, Field, ID, InputType, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DateBase } from '../../lib/entity/date.entity';

@Entity()
@ObjectType()
export class Category extends DateBase {
  @Field()
  @Column({ unique: true })
  @Length(3, 255)
  @IsString()
  name: string;

  /*  @OneToMany(
    type => Product,
    product => product.category,
  ) // inverse relation
  products?: Product[]; */
}

@InputType()
export class CategoryInput extends DateBase {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @Column()
  @MaxLength(30)
  @IsString()
  name: string;
}

@ArgsType()
export class CategoryArgs {
  @Field(type => ID)
  @IsString()
  id?: string;

  @Field()
  @IsString()
  name?: string;
}
