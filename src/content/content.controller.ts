import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { ContentEntity } from './entities/content.entity';

@ApiTags('Content')
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) { }

  @Post('create')
  @ApiCreatedResponse({ description: 'Content' })
  @ApiBody({ type: ContentEntity })
  create(@Body() createContentDto: CreateContentDto) {
    return this.contentService.create(createContentDto);
  }

  @Get('all')
  findAll() {
    return this.contentService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.contentService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiCreatedResponse({ description: 'Content' })
  @ApiBody({ type: ContentEntity })
  update(@Param('id') id: string, @Body() updateContentDto: UpdateContentDto) {
    return this.contentService.update(+id, updateContentDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.contentService.remove(+id);
  }
}
