import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryResolver } from './resolver/category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entity/category.entity';
import { LoggerModule } from 'src/logger/logger.module';


@Module({
  imports: [TypeOrmModule.forFeature([Category]), LoggerModule],
  providers: [CategoryService, CategoryResolver],
  exports: [],
})
export class CategoryModule { }
