import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoggerService } from 'src/logger/logger.service';
import { Repository } from 'typeorm';
import { isStrAndDefined, isUUID, notFound } from '../lib';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly loggerService: LoggerService,
  ) {
    // set scope: context [CategoryService]
    this.loggerService.setContext('CategoryService');
  }

  async findAll(): Promise<Category[]> {
    try {
      this.loggerService.log('[CategoryService] - return all categories');
      return await this.categoryRepository.find({
        order: { name: 'ASC' },
      });
    } catch (err) {
      this.loggerService.error('[CategoryService] -', `${err}`);
    }
  }

  async findOne(id?: string, name?: string): Promise<Category | null> {
    try {
      const cat = await this.categoryRepository.findOne({
        where: [
          { id: isUUID(id) ? id : null },
          { name: isStrAndDefined(name) ? name : null },
        ],
      });

      if (!cat) {
        notFound('cat not found!');
      }
      return cat;
    } catch (err) {
      this.loggerService.error('[CategoryService] -', `${err}`);
    }
  }

  async create(catArg: Category): Promise<Category | null> {
    try {
      return await this.categoryRepository.save(catArg);
    } catch (err) {
      this.loggerService.error('[CategoryService] -', `${err}`);
    }
  }

  async update(catArg: Category): Promise<Category | null> {
    try {
      const catObj = await this.findOne(catArg.id);
      if (!catObj) {
        return;
      } else {
        catObj.name = catArg.name;
        return await this.categoryRepository.save(catObj);
      }
    } catch (err) {
      this.loggerService.error('[CategoryService] -', `${err}`);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const catId = await this.findOne(id)
      await this.categoryRepository.delete(catId);
    } catch (err) {
      this.loggerService.error('[CategoryService] -', `${err}`);
    }
  }
}
