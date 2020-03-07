import { Module, forwardRef } from '@nestjs/common';
import { ProductResolver } from './resolver/product.resolver';
import { ProductService } from './product.service';
import { CategoryModule } from '../category/category.module';
import { ProductSubscriber } from './entity/subscriber/product.subscriber';
import { LoggerModule } from 'src/logger/logger.module';


@Module({
  imports: [LoggerModule, forwardRef(()=> CategoryModule)],
  providers: [ProductResolver, ProductService, ProductSubscriber],
})
export class ProductModule {}
