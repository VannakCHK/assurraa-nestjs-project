import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { ContentEntity } from './entities/content.entity';

@Injectable()
export class ContentService {
  constructor(@InjectRepository(ContentEntity) private contentEntitiesRepository: Repository<ContentEntity>) { }

  create(createContentDto: CreateContentDto): Promise<ContentEntity> {
    const newContent = this.contentEntitiesRepository.create(createContentDto);
    return this.contentEntitiesRepository.save(newContent);
  }

  findAll(): Promise<ContentEntity[]> {
    return this.contentEntitiesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} content`;
  }

  async update(id: number, updateContentDto: UpdateContentDto) {
    return await this.contentEntitiesRepository.update(id, updateContentDto);
  }

  async remove(id: number) {
    return await this.contentEntitiesRepository.delete(id);
  }
}
