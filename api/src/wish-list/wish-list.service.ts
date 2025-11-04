import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { WishListCreateDto } from './dto/WishListCreateDto';
import { AttributeType } from '@prisma/client';

@Injectable()
export class WishListService {
    constructor(private readonly prisma: PrismaService) {}

    async create(wishListCreateDto: WishListCreateDto) {
        if (!wishListCreateDto) {
            return { message: 'Неверно заданы данные' };
        }

        console.log(wishListCreateDto);

        const category = await this.prisma.category.findUnique({
            where: {
                id: wishListCreateDto.categoryId,
            },
        });

        console.log('category:', category);

        if (!category) {
            return { message: 'Категория не найдена' };
        }

        return this.prisma.wishList.create({
            data: {
                categoryId: wishListCreateDto.categoryId,
                categoryType: wishListCreateDto.categoryType,
                name: wishListCreateDto.name,
            },
            select: {
                id: true,
                name: true,
            },
        });
    }

    async getByCategoryType(type: AttributeType) {
        const res = await this.prisma.wishList.findUnique({
            where: { categoryType: type },
            select: {
                id: true,
                categoryType: true,
                categoryId: true,
                name: true,
                data: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                    select: {
                        id: true,
                        name: true,
                        data: {
                            select: {
                                // id: true,
                                key: true,
                                value: true,
                                // createdAt: true,
                                // updatedAt: true,
                            },
                        },
                        createdAt: true,
                        updatedAt: true,
                    },
                },
                // createdAt: true,
                // updatedAt: true,
            },
        });

        if (!res) {
            return 'Походу не нашли';
        }

        return res;
    }

    // async getByCategoryId(id: string) {
    //     const res = await this.prisma.wishList.findUnique({
    //         where: {
    //             categoryId: id,
    //         },
    //         select: {
    //             id: true,
    //             categoryId: true,
    //             name: true,
    //             data: {
    //                 select: {
    //                     id: true,
    //                     name: true,
    //                     data: {
    //                         select: {
    //                             // id: true,
    //                             key: true,
    //                             value: true,
    //                             // createdAt: true,
    //                             // updatedAt: true,
    //                         },
    //                     },
    //                     createdAt: true,
    //                     updatedAt: true,
    //                 },
    //             },
    //             // createdAt: true,
    //             // updatedAt: true,
    //         },
    //     });
    //
    //     if (!res) {
    //         return { message: 'Вишлист не найден' };
    //     }
    //
    //     return res;
    // }
}
