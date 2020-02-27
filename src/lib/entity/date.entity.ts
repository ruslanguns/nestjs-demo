import { IsDate } from 'class-validator';
import { ObjectType, Field, ID } from 'type-graphql';
import { CreateDateColumn, Entity, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';
import { EntityEvent } from './entity.events';

@ObjectType({ description: 'The Date model' })
@Entity()
export abstract class DateBase extends EntityEvent {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @CreateDateColumn({ nullable: true })
  @IsDate()
  createdDate?: Date;

  @UpdateDateColumn({ nullable: true })
  @IsDate()
  updatedDate?: Date;
}
