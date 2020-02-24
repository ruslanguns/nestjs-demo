import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsString, IsBoolean, IsDate } from 'class-validator';

@ObjectType({ description: 'The user model' })
@Entity()
export class User extends BaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: number;

  @Field()
  @Column()
  @IsString()
  firstName: string;

  @Field()
  @Column()
  @IsString()
  lastName: string;

  //used to create simple Field Resolver
  @Field({ description: 'Returns full name of user' })
  @IsString()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  @Field()
  @IsString()
  @Column('text', { unique: true })
  email: string;

  @Column()
  @IsString()
  password: string;

  @Column('bool', { default: false })
  @IsBoolean()
  confirmed: boolean;

  @Column('date', { default: Date.now() })
  @IsDate()
  createdDate: Date;
}
