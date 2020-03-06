import { AfterInsert, AfterLoad, AfterRemove, Entity } from 'typeorm';

@Entity()
export abstract class EntityEvent {
  @AfterLoad()
  entityLoaded() {
    console.log('[EntityEvents]: @AfterLoad', new Date());
  }

  @AfterInsert()
  entityInserted() {
    console.log('[EntityEvents]: @AfterInsert', new Date());
  }

  @AfterRemove()
  entityRemoved() {
    console.log('[EntityEvents]: @AfterRemove', new Date());
  }
}
