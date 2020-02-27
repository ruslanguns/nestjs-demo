import { AfterLoad, AfterInsert, AfterRemove, Entity } from "typeorm";


@Entity()
export class EntityEvent {
  @AfterLoad()
  entityLoaded() {
    console.log('[EntityEvents]: entityLoaded event ', new Date());
  }

  @AfterInsert()
  entityInserted() {
    console.log('[EntityEvents]: entityInserted event ', new Date());
  }

  @AfterRemove()
  entityRemoved() {
    console.log('[EntityEvents]: entityRemoved event ', new Date());
  }
}