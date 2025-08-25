import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Category } from '../api/types/Category';
import type { CategoryCreateDto } from '../api/dto/CategoryCreateDto';
import { CategoryService } from '../api/CategoryService';

export const useCategoryStore = defineStore('category', () => {
  const list = ref<Category[]>([]);
  const loading = ref(false);

  async function create(category: CategoryCreateDto): Promise<Category | false> {
    const res = await CategoryService.create(category);
    if (!res) return false;

    list.value.push(res);

    return res;
  }

  async function fetchCategoryList() {
    loading.value = true;

    try {
      const categoryList = await CategoryService.getAll();

      if (!categoryList) return;

      list.value = categoryList;
    } finally {
      loading.value = false;
    }
  }

  function addCategory(category: Category): void | false {
    const isCategoryExist = checkCategoryExistingByName(category.name);

    if (isCategoryExist) {
      return false;
    }

    list.value.push(category);
  }

  function checkCategoryExistingByName(name: string): boolean {
    return list.value.find((category) => category.name === name) ? true : false;
  }

  return {
    list,
    loading,
    create,
    fetchCategoryList,
    addCategory,
    checkCategoryExistingByName,
  };
});
