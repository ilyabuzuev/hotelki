import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttributeService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllByCategoryName(value: string) {
    console.log(value);

    const res = await this.prisma.attribute.findMany({
      where: {
        category: {
          value,
        },
      },
    });

    if (!res) {
      return 'Атрибуты не найден';
    }

    return res;
  }
}
