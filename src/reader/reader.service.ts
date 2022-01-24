import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReaderDto } from './dto/create-reader.dto';
import { UpdateReaderDto } from './dto/update-reader.dto';
import { ReaderEntity } from './entities/reader.entity';

@Injectable()
export class ReaderService {
  constructor(@InjectRepository(ReaderEntity) private readerEntityRepository: Repository<ReaderEntity>) { }

  create(createReaderDto: CreateReaderDto) {
    const newreaderEntity = this.readerEntityRepository.create(createReaderDto);
    return this.readerEntityRepository.save(newreaderEntity);
  }

  findAll(): Promise<ReaderEntity[]> {
    return this.readerEntityRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} reader`;
  }

  async update(id: number, updateReaderDto: UpdateReaderDto) {
    return await this.readerEntityRepository.update(id, updateReaderDto);
  }

  async remove(id: number) {
    return await this.readerEntityRepository.delete(id);
  }
}
