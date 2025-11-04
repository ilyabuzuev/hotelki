import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/CreateCategoryDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { WishListService } from 'src/wish-list/wish-list.service';
import { CategoryResponse } from './model/CategoryResponse';

@Injectable()
export class CategoryService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly wishListService: WishListService,
    ) {}

    async getAll(): Promise<CategoryResponse[]> {
        return this.prisma.category.findMany({
            select: { id: true, name: true, value: true },
        });
    }

    async create(category: CreateCategoryDto): Promise<CategoryResponse> {
        const name = category.name;
        const value = category.value;
        const attributes = category.attributes;

        const res = await this.prisma.category.findFirst({
            where: {
                OR: [{ name }, { value }],
            },
        });

        if (res !== null) {
            return { message: 'Категория уже существует' };
        }

        const createdCategory = await this.prisma.category.create({
            data: {
                name,
                value,
                attributes: { create: attributes },
            },
            select: { id: true, name: true, value: true },
        });

        if (!createdCategory) {
            return { message: 'Не удалось создать категорию' };
        }

        await this.wishListService.create({
            categoryId: createdCategory.id,
            categoryType: value,
            name,
        });

        return createdCategory;
    }
}
