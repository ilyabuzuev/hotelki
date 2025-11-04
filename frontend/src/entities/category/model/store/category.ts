import { defineStore } from 'pinia';
import { ref } from 'vue';
import { type ICategory } from '../../model';

type CurrentCategory = {
  [K in keyof ICategory]: ICategory[K] | null;
};

export const useCategoryStore = defineStore('category1', () => {
  const current = ref<CurrentCategory>({
    id: null,
    name: null,
    value: null,
  });

  const setCurrent = (category: ICategory) => (current.value = category);

  const reset = () => {
    current.value = {
      id: null,
      name: null,
      value: null,
    };
  };

  return { current, setCurrent, reset };
});
