import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post extends BaseEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: number;

  /*  @Field()
  @Column()
  @IsString()
  title: string;

  @Field()
  @Column()
  @IsString()
  description: string; */

  /* @Field(type => [Post])
  @Column()
  posts: Post[]; */

  /* @CreateDateColumn({ type: 'date' })
  @IsDate()
  createdDate: Date;

  @UpdateDateColumn({ type: 'date' })
  @IsDate()
  updatedDate: Date; */
}
