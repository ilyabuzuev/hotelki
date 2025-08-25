import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWishStore = defineStore('wish', () => {
  const list = ref();

  function fetchWishList(category: string) {
    list.value = category;
  }

  return {
    list,
    fetchWishList,
  };
});
