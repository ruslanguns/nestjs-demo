import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoggerService } from 'src/logger/logger.service';
import { CategoryService } from '../category.service';
import {
  Category,
  CategoryArgs,
  CategoryInput,
  CategoryUpdateInput,
} from '../entity/category.entity';


@Resolver(of => Category)
export class CategoryResolver {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly loggerService: LoggerService,
  ) {
    // set scope: context [CategoryService]
    this.loggerService.setContext('CategoryResolver');
  }

  @Query(returns => [Category], { nullable: true })
  async categories(): Promise<Category[] | null> {
    try {
      return await this.categoryService.findAll();
    } catch (err) {
      this.loggerService.error('[CategoryResolver] -', `${err}`);
    }
  }

  @Query(returns => Category, { nullable: true })
  async category(@Args() { id, name }: CategoryArgs): Promise<Category | null> {
    try {
      
      return await this.categoryService.findOne(id, name);
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(returns => Category, { nullable: true })
  async addCategory(
    @Args('categoryInput') categoryInput: CategoryInput,
  ): Promise<Category | null> {
    try {
      return await this.categoryService.create(categoryInput);
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(returns => Category, { nullable: true })
  async updateCategory(
    @Args('categoryInput') categoryInput: CategoryUpdateInput,
  ): Promise<Category | null> {
    try {
      return await this.categoryService.update(categoryInput);
      return;
    } catch (err) {
      throw new Error(err);
    }
  }

  @Mutation(returns => Category, { nullable: true })
  async removeCategory(@Args() { id, name }: CategoryArgs): Promise<void> {
    try {
      // const arg: string = id ? id : name;
      await this.categoryService.delete(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
