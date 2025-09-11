import type { AttributeDto } from './dto/AttributeDto';
import type { Attribute } from './types/Attribute';

export function mapAttributeDtoToModel(dto: AttributeDto): Attribute {
  return {
    name: dto.name,
    type: dto.type,
    value: null,
  };
}
