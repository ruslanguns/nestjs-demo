import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {  isStrAndDefined, isUUID, badRequest } from 'src/lib';
import { Repository } from 'typeorm';
import { Product, ProductFilterArgs } from './entity/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>, 
    //private readonly categoryService: CategoryService, 
    //private readonly loggerService: LoggerService,
  ) {
    // set scope: context [ProductService]
    //this.loggerService.setContext('ProductService');
  }

  async findOne(id?: string, name?: string): Promise<Product | null> {
    try {
      return await this.productRepository.findOne({
        where: [
          { id: isUUID(id) ? id : null },
          { name: isStrAndDefined(name) ? name : null },
        ],
      });
    } catch (err) {
      //this.loggerService.error('[ProductService] -', `${err}`);
    }
  }

  async findAll(
    filterObj?: ProductFilterArgs,
  ): Promise<Product[] | Product | null> {
    try {
      const products: Product[] = await this.productRepository.find();

      if (Object.keys(filterObj).length) {
        const { filterBy, skip } = filterObj;

        if (filterBy) {
          return products.filter(p => p.name === filterBy);
        }

        if (skip) {
          return products.slice(1, skip);
        }
      } else {
        return products;
      }
    } catch (err) {
      //this.loggerService.error('[ProductService] -', `${err}`);
    }
  }

  async create(product: Product): Promise<Product> {
    try {
      return await this.productRepository.save(product);
    } catch (err) {
      //this.loggerService.error('[ProductService] -', `${err}`);
    }
  }

  async update(args: Product) {
    try {
      if (!isUUID(args.id)) {
        return;
      } else {
        const prodObj = await this.findOne(args.id);
        prodObj.name = args.name;

        return await this.productRepository.save(prodObj);
      }
    } catch (err) {
      //this.loggerService.error('[ProductService] -', `${err}`);
    }
  }

  async delete(id?: string): Promise<void> {
    try {
      const res = await this.productRepository.delete({
        id: isUUID(id) ? id : null,
      });

      if (res.affected === 0) {
        badRequest('Product was not deleted!');
      }

    } catch (err) {
      //this.loggerService.error('[ProductService] -', `${err}`);
    }
  }
}
