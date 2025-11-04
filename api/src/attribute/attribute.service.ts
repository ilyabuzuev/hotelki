import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttributeService {
    constructor(private readonly prisma: PrismaService) {}

    async getAllByCategoryId(id: string) {
        const category = await this.prisma.category.findUnique({
            where: { id },
            select: {
                attributes: {
                    select: { name: true, type: true },
                },
            },
        });

        if (!category) {
            return `Категория с ID ${id} не найдена`;
        }

        return category.attributes;

        // const res = await this.prisma.category.findMany({
        //   where: {
        //     category: {
        //       id,
        //     },
        //   },
        //   select: {
        //     name: true,
        //     type: true,
        //   },
        // });

        // console.log(res);

        // if (!res) {
        //   return 'Атрибуты не найден';
        // }

        // return res;
    }

    async getAllByCategoryName(value: string) {
        console.log(value);
        // const category = await this.prisma.category.findUnique({
        //   where: {
        //     value: value,
        //   },
        // });

        // if (!category) {
        //   return 'Категории с таким названием нет';
        // }

        const res = await this.prisma.attribute.findMany({
            where: {
                category: {
                    value,
                },
            },
            select: { name: true, type: true },
        });

        console.log(res);

        if (!res) {
            return 'Атрибуты не найден';
        }

        return res;
    }
}
