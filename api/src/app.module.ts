import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { CategoryModule } from './category/category.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { AttributeService } from './attribute/attribute.service';
import { AttributeController } from './attribute/attribute.controller';
import { WishListService } from './wish-list/wish-list.service';
import { WishListController } from './wish-list/wish-list.controller';
import { WishService } from './wish/wish.service';
import { WishController } from './wish/wish.controller';

@Module({
    imports: [CategoryModule],
    controllers: [CategoryController, AttributeController, WishListController, WishController],
    providers: [
        PrismaService,
        CategoryService,
        AttributeService,
        WishListService,
        WishService,
    ],
})
export class AppModule {}
