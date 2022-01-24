import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
const moment = require('moment');

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post('create')
  @ApiCreatedResponse({ description: 'Category' })
  @ApiBody({ type: CategoryEntity })
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @Get('all')
  findAll() {
    return this.categoryService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Patch('update/:id')
  @ApiCreatedResponse({ description: 'Category' })
  @ApiBody({ type: CategoryEntity })
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }

  @ApiQuery({ name: 'start_date', example: moment().format('YYYY-MM-DD') })
  @ApiQuery({ name: 'end_date', example: moment().format('YYYY-MM-DD') })
  @Get('report')
  report(
    @Query('start_date') start_date: string,
    @Query('end_date') end_date: string,
  ) {
    console.log('Report Function')
    return this.categoryService.categoryReport({ start_date, end_date })
  }

}
