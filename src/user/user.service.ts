import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(UserEntity) private userEntityRepository: Repository<UserEntity>) { }

  create(createUserDto: CreateUserDto) {
    const newUserEntity = this.userEntityRepository.create(createUserDto);
    return this.userEntityRepository.save(newUserEntity);
  }

  findAll(): Promise<UserEntity[]> {
    return this.userEntityRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userEntityRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userEntityRepository.delete(id);
  }
}
