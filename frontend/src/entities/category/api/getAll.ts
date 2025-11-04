import { api } from 'src/app/boot/axios';
import type { ICategoryDto, ICategory } from '../model';
import { adaptCategoryDto } from './mapper';

export const getAll = async (): Promise<ICategory[]> => {
  const res = await api.get<ICategoryDto[]>('/category/all');
  return res.data.map(adaptCategoryDto);
};
