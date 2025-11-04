import { Body, Controller, Post } from '@nestjs/common';
import { WishService } from './wish.service';
import type { ICreateWishDto } from './model/create-wish.dto';

@Controller('wish')
export class WishController {
    constructor(private readonly wishService: WishService) {}

    @Post('create')
    async create(@Body() createWishDto: ICreateWishDto) {
        return await this.wishService.create(createWishDto);
    }
}
