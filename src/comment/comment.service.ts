import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RelationId, Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(@InjectRepository(CommentEntity) private commentEntityRepository: Repository<CommentEntity>) { }

  create(createCommentDto: CreateCommentDto) {
    const newCommentEntity = this.commentEntityRepository.create(createCommentDto);
    return this.commentEntityRepository.save(newCommentEntity);
  }

  async findAll(): Promise<CommentEntity[]> {
    const comment = await this.commentEntityRepository.find({
      relations: ['contentEntity', 'readerEntity']
    })
    return comment
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    return await this.commentEntityRepository.update(id, updateCommentDto);
  }

  async remove(id: number) {
    return await this.commentEntityRepository.delete(id);
  }
}
