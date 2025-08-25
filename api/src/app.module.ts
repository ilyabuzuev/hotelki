import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { CategoryModule } from './category/category.module';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';

@Module({
  imports: [CategoryModule],
  controllers: [AppController, CategoryController],
  providers: [AppService, PrismaService, CategoryService],
})
export class AppModule {}
