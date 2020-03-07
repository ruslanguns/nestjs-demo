import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { LoggerService } from 'src/logger/logger.service';
import { Product, ProductArgs, ProductInput, ProductFilterArgs } from '../entity/product.entity';
import { ProductService } from '../product.service';
import { ValidationPipe, UsePipes } from '@nestjs/common';

@Resolver(of => Product)
export class ProductResolver {
  constructor(
    private readonly productService: ProductService, 
    private readonly loggerService: LoggerService,
  ) {
    // set scope: context [ProductResolver]
    this.loggerService.setContext('ProductResolver');
  }

  @Query()
  async products(
    @Args() { filterBy, skip }: ProductFilterArgs,
  ): Promise<Product[] | Product | null> {
    try {
      return await this.productService.findAll({filterBy, skip});
    } catch (err) {
      //this.loggerService.error('[ProductService] -', `${err}`);
    }
  }

  @Query(type => Product, { description: 'Get product by id or title' })
  async product(@Args() { id, title }: ProductArgs): Promise<Product> {
    try {
      return await this.productService.findOne(id, title);
    } catch (err) {
      //this.loggerService.error('[ProductService] -', `${err}`);
    }
  }

  @Mutation(type => Product, { description: 'Create Product' })
  @UsePipes(ValidationPipe)
  async createProduct(
    @Args('productInput') productInput: ProductInput,
  ): Promise<Product> {
    try {
      return await this.productService.create(productInput);
    } catch (err) {
      //this.loggerService.error('[ProductService] -', `${err}`);
    }
  }

  @Mutation(type => Product, { description: 'Update a product by id' })
  @UsePipes(ValidationPipe)
  async updateProduct(
    @Args('productInput') productInput: ProductInput,
  ): Promise<Product> {
    try {
      return await this.productService.update(productInput);
    } catch (err) {
      //this.loggerService.error('[ProductService] -', `${err}`);
    }
  }

  @Mutation(type => null, { description: 'Delete a product by id' })
  @UsePipes(ValidationPipe)
  async removeProduct(@Args() { id, title }: ProductArgs): Promise<void> {
    try {
      await this.productService.delete(id);
    } catch (err) {
      //this.loggerService.error('[ProductService] -', `${err}`);
    }
  }
}
