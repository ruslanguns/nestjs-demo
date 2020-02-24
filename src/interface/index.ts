import { Field, ID, Int } from 'type-graphql';

export abstract class IUser {
  @Field(type => ID)
  id: string;

  @Field()
  name: string;

  @Field(type => Int)
  age: number;
}
