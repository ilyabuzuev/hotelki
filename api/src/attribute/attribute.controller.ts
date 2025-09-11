import { Controller, Get, Param } from '@nestjs/common';
import { AttributeService } from './attribute.service';

@Controller('attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}

  @Get('list/:name')
  async getAllByCategoryName(@Param() { name }: { name: string }) {
    return this.attributeService.getAllByCategoryName(name);
  }
}
