import { AttributeCreateDto } from 'src/attribute/dto/AttributeCreateDto';

export interface CreateCategoryDto {
    name: string;
    value: string;
    attributes: AttributeCreateDto[];
}
