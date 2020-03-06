/* eslint-disable @typescript-eslint/no-unused-vars */
import { Min } from 'class-validator';
import { Post } from 'src/blog/post/entity/post.entity';
import { ArgsType, Field, Int, ObjectType } from 'type-graphql';
import { Entity } from 'typeorm';
import { User } from '../../../user/entity/user.entity';

@Entity()
@ObjectType()
export class Author extends User {
  @Field(type => [Post])
  posts: Post[];
}

@ArgsType()
export class AuthorArgs {
  @Field(type => Int)
  @Min(1)
  id: number;
}
