import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import type { WishCreateDto } from './dto/WishCreateDto';
import { WishDeleteDto } from './dto/WishDeleteDto';

@Injectable()
export class WishService {
  constructor(private readonly prisma: PrismaService) {}

  async create(wishCreateDto: WishCreateDto) {
    const { data, ...wish } = wishCreateDto;

    return await this.prisma.wish.create({
      data: {
        ...wish,
        data: { create: data },
      },
      include: {
        data: true,
      },
    });
  }

  async delete(wishDeleteDto: WishDeleteDto) {
    console.log(wishDeleteDto);
    await this.prisma.wishData.deleteMany({
      where: { wishId: wishDeleteDto.id },
    });

    const res = await this.prisma.wish.delete({
      where: { id: wishDeleteDto.id },
    });

    console.log(res);
  }

  async getByType(type: string) {
    const res = await this.prisma.wish.findMany({
      where: { categoryType: type },
      select: {
        id: true,
        createdAt: true,
        name: true,
        data: {
          select: {
            key: true,
            value: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!res) {
      return 'Список хотелок не найден';
    }

    return res;
  }
}
