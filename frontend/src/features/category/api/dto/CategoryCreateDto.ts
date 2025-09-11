import type { AttributeCreateDto } from 'src/features/attribute/api/dto/AttributeCreateDto';

export interface CategoryCreateDto {
  name: string;
  value: string;
  attributes: AttributeCreateDto[];
}
