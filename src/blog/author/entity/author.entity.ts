/* eslint-disable @typescript-eslint/no-unused-vars */
import { Min } from 'class-validator';
import { Post } from 'src/blog/post/entity/post.entity';
import { UserBase } from 'src/lib/entity/userBase.entity';
import { ArgsType, Field, Int, ObjectType } from 'type-graphql';
import { Entity } from 'typeorm';

@Entity()
@ObjectType()
export class Author extends UserBase {
  @Field(type => [Post])
  posts: Post[];
}

@ArgsType()
export class AuthorArgs {
  @Field(type => Int)
  @Min(1)
  id: number;
}
