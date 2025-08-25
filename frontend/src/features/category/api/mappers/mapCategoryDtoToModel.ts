import type { CategoryDto } from '../dto/CategoryDto';
import type { Category } from '../types/Category';

export function mapCategoryDtoToModel(dto: CategoryDto): Category {
  return {
    id: dto.id,
    label: dto.name,
    name: dto.value,
  };
}
