/* eslint-disable @typescript-eslint/no-unused-vars */
import { Min } from 'class-validator';
import { UserRole } from 'src/lib/constants';
//
//import { Post } from 'src/post/entity/post.entity';
import { User } from 'src/user/entity/user.entity';
import { ArgsType, Field, InputType, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Author extends User {
  //@Field(type => [Post])
  //posts: Post[];
}

@ArgsType()
export class AuthorArgs {
  @Field(type => Int)
  @Min(1)
  id: number;
}

@InputType()
export class JourneyInput {
  @Field(type => UserRole) //the Enum most be issued as type foremost
  direction: UserRole;
}
