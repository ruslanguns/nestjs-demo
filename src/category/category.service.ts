import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]>{
    try {
      return await this.categoryRepository.find();
    } catch (err) {
      throw new Error(err);
    }
  }

  async findOne(name?: string, id?: string): Promise<Category | null> {
    try {
      return await this.categoryRepository.findOne({
        where: [{ name }, { id }],
        order: { name: 'ASC' },
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  async create(catArg: Category): Promise<Category | null> {
    try {
      return await this.categoryRepository.save(catArg);
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(catArg: Category): Promise<Category | null> {
    try {
      const catObj = await this.categoryRepository.findOne(catArg.id);
      if (!catObj) {
        return;
      } else {
        catObj.name = catArg.name;
        return await this.categoryRepository.save(catObj);
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.categoryRepository.delete(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
