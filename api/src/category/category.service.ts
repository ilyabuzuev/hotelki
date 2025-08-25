import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/CreateCategoryDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.category.findMany();
  }

  async create(category: CreateCategoryDto) {
    const res = await this.prisma.category.findUnique({
      where: { name: category.name },
    });

    if (res) {
      return 'Категория уже существует';
    }

    return await this.prisma.category.create({ data: category });
  }
}
