import { Injectable } from '@nestjs/common';
import { ICreateWishDto } from './model/create-wish.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class WishService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createWishDto: ICreateWishDto) {
        const { name, wishListId, data } = createWishDto;

        const res = await this.prisma.wishList.findUnique({
            where: { id: wishListId },
        });

        if (!res) {
            return { message: `Вишлист с id '${wishListId}' не найден` };
        }

        return this.prisma.wish.create({
            data: {
                name,
                wishListId,
                data: { create: data },
            },
            select: {
                id: true,
                name: true,
                data: {
                    select: {
                        key: true,
                        value: true,
                    },
                },
                createdAt: true,
                updatedAt: true,
            },
        });
    }
}
