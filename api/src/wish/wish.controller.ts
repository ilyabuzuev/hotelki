import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { WishService } from './wish.service';
import type { WishCreateDto } from './dto/WishCreateDto';
import type { WishDeleteDto } from './dto/WishDeleteDto';

@Controller('wish')
export class WishController {
  constructor(private readonly wishService: WishService) {}

  @Post('create')
  async create(@Body() wish: WishCreateDto) {
    return await this.wishService.create(wish);
  }

  @Delete('delete')
  async delete(@Body() wish: WishDeleteDto) {
    console.log(wish);

    return await this.wishService.delete(wish);
  }

  @Get('list/:type')
  async getByType(@Param() { type }: { type: string }) {
    return await this.wishService.getByType(type);
  }
}
