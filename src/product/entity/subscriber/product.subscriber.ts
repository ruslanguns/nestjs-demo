import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { Product } from '../product.entity';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  listenTo() {
    // listens only to POST events
    return Product;
  }

  beforeInsert(e: InsertEvent<Product>) {
    console.log(`[BEFORE PRODUCT INSERTED: ${e.entity}`);
  }
}
