import { Controller, Get, Param } from '@nestjs/common';
import { AttributeService } from './attribute.service';

@Controller('attribute')
export class AttributeController {
    constructor(private readonly attributeService: AttributeService) {}

    @Get('list/:id')
    async getAllByCategoryId(@Param() { id }: { id: string }) {
        console.log(id);
        return this.attributeService.getAllByCategoryId(id);
    }

    // @Get('list/:name')
    // async getAllByCategoryName(@Param() { name }: { name: string }) {
    //   console.log(name);
    //   return this.attributeService.getAllByCategoryName(name);
    // }
}
