import { api } from 'src/app/boot/axios';
import { NotifyMessage } from 'src/shared/lib/notify';
import type { APIError } from 'src/shared/types/error';
import type { ICategory, ICategoryCreateDto, ICategoryDto } from '../model';
import { adaptCategoryDto } from './mapper';
import { isCategory } from '../lib';

export const create = async (dto: ICategoryCreateDto): Promise<ICategory | APIError> => {
  const res = await api.post<ICategoryDto | APIError>('/category/create', dto);

  if (isCategory(res.data)) {
    return adaptCategoryDto(res.data);
  } else {
    return { message: NotifyMessage.CATEGORY_ALREADY_EXIST };
  }
};
