import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import type { CreateCategoryDto } from './dto/CreateCategoryDto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get('')
  async getAll() {
    return this.categoryService.getAll();
  }

  @Post('create')
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }
}
