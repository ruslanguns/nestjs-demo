import { IsBoolean, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import { UserRole } from 'src/lib/constants';
import { ArgsType, Field, ID, InputType, ObjectType, registerEnumType } from 'type-graphql';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export interface ILoginUser {
  email?: string;
  username?: string;
  password: string;
}

@ObjectType({ description: 'The user model' })
@Entity()
export  class User {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @Column()
  @IsString()
  @Length(2, 25)
  firstName: string;

  @Field()
  @Column()
  @IsString()
  @Length(2, 25)
  lastName: string;

  //used to create simple Field Resolver
  /* @Field({ description: 'Returns full name of user', nullable: true })
  @IsString()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  } */
  
  @Field()
  @IsEmail()
  @Column('text', { unique: true })
  email: string;

  @Column()
  @Length(5, 25)
  @IsString()
  @IsNotEmpty()
  password: string;

  @Field(type => UserRole, { nullable: true }) //the Enum most be issued as type foremost
  @Column({ type: 'enum', enum: UserRole, default: UserRole.EDITOR })
  role?: UserRole;

  @Column('bool', { default: false, nullable: true })
  @IsBoolean()
  confirmedSignup?: boolean;

  @CreateDateColumn({ type: 'date', nullable: true })
  createdDate?: Date;

  @UpdateDateColumn({ type: 'date', nullable: true })
  updatedDate?: Date;
}

/* To tell TypeGraphQL about our enum, we would ideally mark the enums with the @GraphQLEnumType() decorator. However, TypeScript decorators only work with classes, so we need to make TypeGraphQL aware of the enums manually by calling the registerEnumType function and providing the enum name for GraphQL: */

registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'The definition of an enumerated User Role',
});

@ArgsType()
export class GetUserArgs {
  @Field(type => ID)
  //@IsNumberString()
  id: string;
}

@InputType({ description: 'New user data' })
export class SignupInput {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @IsString()
  @Length(5, 25)
  firstName: string;

  @Field()
  @IsString()
  @Length(5, 25)
  lastName: string;

  @Field()
  @IsString()
  @IsEmail()
  email: string;

  @Field()
  @Length(5, 25)
  @IsString()
  @IsNotEmpty()
  password: string;
}

@InputType({ description: 'New user data' })
export class LoginInput  {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @IsString()
  @IsEmail()
  email: string;

  @Field()
  @Length(5, 25)
  @IsString()
  password: string;
}

@InputType({ description: 'Add new user with role' })
export class AddUserInput{
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @IsString()
  @Length(5, 25)
  firstName: string;

  @Field()
  @IsString()
  @Length(5, 25)
  lastName: string;

  @Field()
  @IsString()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @Length(5, 25)
  password: string;

  @Field()
  @IsString()
  role: UserRole;

  // @Column('bool', { default: false, nullable: true })
  @IsBoolean()
  confirmedSignup?: boolean;
}
