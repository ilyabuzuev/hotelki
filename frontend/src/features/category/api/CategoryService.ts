import { api } from 'src/boot/axios';
import type { CategoryCreateDto } from './dto/CategoryCreateDto';
import type { CategoryDto } from './dto/CategoryDto';
import type { Category } from './types/Category';
import { mapCategoryDtoToModel } from './mappers/mapCategoryDtoToModel';

export class CategoryService {
  public static async create(category: CategoryCreateDto): Promise<Category | undefined> {
    const res = await api.post<CategoryDto>('category/create', category);
    if (res.status !== 201) return;
    return mapCategoryDtoToModel(res.data);
  }

  public static async getAll(): Promise<Category[] | undefined> {
    const res = await api.get<CategoryDto[]>('category');
    if (res.status !== 200) return;
    return res.data.map(mapCategoryDtoToModel);
  }
}
