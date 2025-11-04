import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { APIError } from 'src/shared/types/error';
import type { ICategory, ICategoryCreate } from '../../model';
import { CategoryApi } from '../../api';
import { isCategory } from '../../lib';

export const useCategoryListStore = defineStore('category-list', () => {
  const data = ref<ICategory[]>([]);
  const loading = ref(false);

  const fetchAll = async () => {
    loading.value = true;

    try {
      const res = await CategoryApi.getAll();
      data.value = res;
    } finally {
      loading.value = false;
    }
  };

  const create = async (dto: ICategoryCreate): Promise<true | APIError> => {
    const res = await CategoryApi.create(dto);

    if (isCategory(res)) {
      data.value.push(res);
      return true;
    }

    return res;
  };

  return {
    data,
    loading,
    fetchAll,
    create,
  };
});
