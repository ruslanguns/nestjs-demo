import { IsString,IsEmail, IsNotEmpty, IsNumberString, Length, IsBoolean } from 'class-validator';
import { UserBase } from 'src/lib/entity/userBase.entity';
import { ArgsType, Field, ID, ObjectType, InputType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from 'src/lib/constants';


export interface ILoginUser{
  email:string;
  password:string;
}

@ObjectType({ description: 'The user model' })
@Entity()
export class User extends UserBase {
  //used to create simple Field Resolver
  /* @Field({ description: 'Returns full name of user', nullable: true })
  @IsString()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  } */
}

@ArgsType()
export class GetUserArgs {
  @Field(type => ID)
  //@IsNumberString()
  id: string;
}

@InputType({ description: 'New user data' })
export class UserRegInput implements Partial<UserBase> {
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
export class UserLoginInput implements Partial<UserBase> {
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
export class AddUserInput extends UserBase {
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