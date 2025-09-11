import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { CategoryModule } from './category/category.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
import { WishService } from './wish/wish.service';
import { WishController } from './wish/wish.controller';
import { AttributeService } from './attribute/attribute.service';
import { AttributeController } from './attribute/attribute.controller';

@Module({
  imports: [CategoryModule],
  controllers: [AppController, CategoryController, WishController, AttributeController],
  providers: [AppService, PrismaService, CategoryService, WishService, AttributeService],
})
export class AppModule {}
