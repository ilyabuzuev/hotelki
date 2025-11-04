import { defineStore } from 'pinia';
import { ref } from 'vue';
import { WishListApi } from '../api';
import { type IWishList } from './types';

export const useWishListStore = defineStore('wish-list', () => {
  const current = ref<IWishList | null>(null);
  const loading = ref(false);

  const getOneByCategory = async (category: string) => {
    loading.value = true;

    try {
      const res = await WishListApi.getOneByCategory(category);
      if (res) setCurrent(res);
    } finally {
      loading.value = false;
    }
  };

  const setCurrent = (wishList: IWishList) => (current.value = wishList);

  const reset = () => {
    current.value = null;
  };

  return { current, loading, getOneByCategory, reset };
});
