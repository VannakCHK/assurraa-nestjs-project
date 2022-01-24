import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReaderService } from './reader.service';
import { CreateReaderDto } from './dto/create-reader.dto';
import { UpdateReaderDto } from './dto/update-reader.dto';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ReaderEntity } from './entities/reader.entity';

@ApiTags('Reader')
@Controller('reader')
export class ReaderController {
  constructor(private readonly readerService: ReaderService) { }

  @Post('create')
  @ApiCreatedResponse({ description: 'Reader' })
  @ApiBody({ type: ReaderEntity })
  create(@Body() createReaderDto: CreateReaderDto) {
    return this.readerService.create(createReaderDto);
  }

  @Get('all')
  findAll() {
    return this.readerService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.readerService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiCreatedResponse({ description: 'Reader' })
  @ApiBody({ type: ReaderEntity })
  update(@Param('id') id: string, @Body() updateReaderDto: UpdateReaderDto) {
    return this.readerService.update(+id, updateReaderDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.readerService.remove(+id);
  }
}
