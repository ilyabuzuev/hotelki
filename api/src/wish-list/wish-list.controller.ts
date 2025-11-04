import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WishListService } from './wish-list.service';
import type { WishListCreateDto } from './dto/WishListCreateDto';
import { AttributeType } from '@prisma/client';

@Controller('wish-list')
export class WishListController {
    constructor(private readonly wishListService: WishListService) {}

    @Post('create')
    async create(@Body() dto: WishListCreateDto) {
        return await this.wishListService.create(dto);
    }

    @Get(':type')
    async getByType(@Param() { type }: { type: AttributeType }) {
        return await this.wishListService.getByCategoryType(type);
    }

    // @Get(':id')
    // async getByType(@Param() { id }: { id: string }) {
    //     return await this.wishListService.getByCategoryId(id);
    // }
}
