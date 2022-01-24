import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@ApiTags('Comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) { }

  @Post('create')
  @ApiCreatedResponse({ description: 'Content' })
  @ApiBody({ type: CommentEntity })
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto);
  }

  @Get('all')
  findAll() {
    return this.commentService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiCreatedResponse({ description: 'Content' })
  @ApiBody({ type: CommentEntity })
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+id, updateCommentDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
