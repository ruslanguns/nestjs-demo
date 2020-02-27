import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from '../category.service';
import {
  Category,
  CategoryArgs,
  CategoryInput,
} from '../entity/category.entity';

@Resolver(of => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Query(returns => [Category], { nullable: true })
  async categories(): Promise<Category[] | null> {
    try {
      return await this.categoryService.findAll();
    } catch (err) {
      throw new Error(err);
    }
  }

  @Query(returns => Category, { nullable: true })
  async category(@Args() { id, name }: CategoryArgs): Promise<Category | null> {
    try {
      return await this.categoryService.findOne(name, id);
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
    @Args('categoryInput') categoryInput: CategoryInput,
  ): Promise<Category | null> {
    try {
   
      //return await this.categoryService.update(categoryInput);
      return
    } catch (err) {
      throw new Error(err);
    }
  }
}
