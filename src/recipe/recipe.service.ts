import { Injectable } from '@nestjs/common';
import { Recipe, NewRecipeInput, RecipesArgs } from './entity/recipe.entity';

@Injectable()
export class RecipeService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewRecipeInput): Promise<Recipe> {
    return {} as any;
  }

  async findOneById(id: string): Promise<Recipe> {
    return {} as any;
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return [] as Recipe[];
  }

  async remove(id: string): Promise<boolean> {
    return true;
  }
}
