import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './resolver/category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService, CategoryResolver, ],
  exports: [TypeOrmModule]
})
export class CategoryModule {}
