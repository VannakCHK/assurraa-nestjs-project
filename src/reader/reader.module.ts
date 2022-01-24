import { Module } from '@nestjs/common';
import { ReaderService } from './reader.service';
import { ReaderController } from './reader.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReaderEntity } from './entities/reader.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ReaderEntity])],
  controllers: [ReaderController],
  providers: [ReaderService]
})
export class ReaderModule { }
