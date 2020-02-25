import { IsString } from 'class-validator';
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
  id: string;
}


@InputType({ description: 'New user data' })
export class UserRegInput implements Partial<UserBase> {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Field()
  @IsString()
  firstName: string;

  @Field()
  @IsString()
  lastName: string;
  
  @Field()
  @IsString()
  email: string;
  
  @Field()
  @IsString()
  password: string;
}


@InputType({ description: 'New user data' })
export class UserLoginInput implements Partial<UserBase> {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;
  
  @Field()
  @IsString()
  email: string;

  @Field()
  @IsString()
  password: string;
}

@InputType({ description: 'Add new user with role' })
export class AddUserInput extends UserBase {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;
  
  @Field()
  @IsString()
  firstName: string;
  
  @Field()
  @IsString()
  lastName: string;
  
  @Field()
  @IsString()
  email: string;

  @Field()
  @IsString()
  password: string;

  @Field()
  @IsString()
  role: UserRole;
}