import type { ICategory, ICategoryDto } from '../model';

export function adaptCategoryDto(dto: ICategoryDto): ICategory {
  return dto;
}
