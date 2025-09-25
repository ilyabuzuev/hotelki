import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Category } from '../api/types/Category';
import type { CategoryCreateDto } from '../api/dto/CategoryCreateDto';
import { CategoryService } from '../api/CategoryService';
// import { useRoute } from 'vue-router';

export const useCategoryStore = defineStore('category', () => {
  // const route = useRoute();
  const list = ref<Category[]>([]);
  const loading = ref(false);
  const current = ref<string | null>(null);

  function setCurrent(category: string) {
    current.value = category;
  }

  function reset() {
    current.value = null;
  }

  async function create(category: CategoryCreateDto): Promise<Category | false> {
    const res = await CategoryService.create(category);
    if (!res) return false;
    add(res);
    return res;
  }

  async function fetchAll(): Promise<void | undefined> {
    loading.value = true;

    try {
      const categoryList = await CategoryService.getAll();

      if (!categoryList) return;

      list.value = categoryList;
    } finally {
      loading.value = false;
    }
  }

  function add(category: Category): void {
    list.value.push(category);
  }

  return {
    list,
    loading,
    current,
    create,
    fetchAll,
    add,
    setCurrent,
    reset,
  };
});
