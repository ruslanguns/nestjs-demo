import { IsBoolean, IsDate, IsString } from 'class-validator';
import { Field, ID, ObjectType, registerEnumType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole } from '../constants';

@ObjectType({ description: 'The user model' })
@Entity()
export abstract class UserBase {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @Column()
  @IsString()
  firstName: string;

  @Field()
  @Column()
  @IsString()
  lastName: string;

  @Field()
  @IsString()
  @Column('text', { unique: true })
  email: string;

  @Column()
  @IsString()
  password: string;

  @Field(type => UserRole, { nullable: true }) //the Enum most be issued as type foremost
  @Column({ type: 'enum', enum: UserRole, default: UserRole.EDITOR })
  role?: UserRole;

  @Column('bool', { default: false, nullable: true })
  @IsBoolean()
  confirmedSignup?: boolean;

  @CreateDateColumn({ type: 'date', nullable:true })
  @IsDate()
  createdDate?: Date;

  @UpdateDateColumn({ type: 'date', nullable:true })
  @IsDate()
  updatedDate?: Date;
}

/* To tell TypeGraphQL about our enum, we would ideally mark the enums with the @GraphQLEnumType() decorator. However, TypeScript decorators only work with classes, so we need to make TypeGraphQL aware of the enums manually by calling the registerEnumType function and providing the enum name for GraphQL: */

registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'The definition of an enumerated User Role',
});
