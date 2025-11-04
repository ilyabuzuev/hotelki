import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { IWishList } from './wish-list';
import type { APIError } from 'src/shared/types/error';
import type { IWish } from 'src/entities/wish/model';
import { WishListApi } from '../api';
import { isWishList } from '../lib';

export const useWishListStore = defineStore('wish-list1', () => {
  const current = ref<IWishList | null>(null);
  const loading = ref(false);

  const fetchByType = async (type: string): Promise<true | APIError> => {
    loading.value = true;

    try {
      const res = await WishListApi.getByCategoryType(type);

      if (isWishList(res)) {
        current.value = res;
        return true;
      }

      return res;
    } finally {
      loading.value = false;
    }
  };

  const addWish = (wish: IWish) => {
    current.value?.data.unshift(wish);
  };

  const reset = () => {
    current.value = null;
    loading.value = false;
  };

  return {
    current,
    loading,
    fetchByType,
    addWish,
    reset,
  };
});
