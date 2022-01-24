import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(@InjectRepository(CategoryEntity) private categoryEntityRepository: Repository<CategoryEntity>) { }

  create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    const newCategoryEntity = this.categoryEntityRepository.create(createCategoryDto);
    return this.categoryEntityRepository.save(newCategoryEntity);
  }

  async findAll(): Promise<CategoryEntity[]> {
    const category = await this.categoryEntityRepository.find({
      relations: ['contentEntity', 'userEntity']
    })
    return category
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryEntityRepository.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    return this.categoryEntityRepository.delete(id);
  }

  async categoryReport(options: { start_date: string, end_date: string }) {
    try {
      const found = await this.categoryEntityRepository.find({
        relations: ['contentEntity', 'userEntity']
      })
      return found
    } catch (error) { throw error }
  }
}
