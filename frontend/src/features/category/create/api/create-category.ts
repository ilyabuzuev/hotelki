import { type ICategoryCreate, useCategoryListStore } from 'src/entities/category';
import type { APIError } from 'src/shared/types/error';

export const createCategory = async (dto: ICategoryCreate): Promise<true | APIError> => {
  const categoryListStore = useCategoryListStore();
  const res = await categoryListStore.create(dto);

  if (res === true) {
    return true;
  }

  return res;
};
