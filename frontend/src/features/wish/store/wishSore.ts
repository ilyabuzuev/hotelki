import { defineStore } from 'pinia';
import { ref } from 'vue';
import { WishService } from '../api/WishService';
import { AttributeService } from 'src/features/attribute/api/AttributeService';
import type { Wish } from '../api/types/Wish';
import type { Attribute } from 'src/features/attribute/api/types/Attribute';
import type { WishCreateDto } from '../api/dto/WishCreateDto';

export const useWishStore = defineStore('wish', () => {
  const list = ref<Wish[]>([]);
  const attributeList = ref<Attribute[]>([]);

  const isCreateDialogOpen = ref(false);
  const isDeleteDialogOpen = ref(false);

  const isWishListLoading = ref(false);
  const isWishAttributeListLoading = ref(false);
  const isWishCreateLoading = ref(false);
  const isWishDeleteLoading = ref(false);

  async function fetchAllByCategory(category: string): Promise<boolean> {
    isWishListLoading.value = true;

    try {
      const res = await WishService.getAllByCategory(category);
      if (!res) return false;

      list.value = res;

      return true;
    } finally {
      isWishListLoading.value = false;
    }
  }

  async function fetchAttributeListByCategory(category: string): Promise<boolean> {
    isWishAttributeListLoading.value = true;

    try {
      const res = await AttributeService.getListByCategory(category);
      if (!res) return false;

      attributeList.value = res;

      return true;
    } finally {
      isWishAttributeListLoading.value = false;
    }
  }

  async function create(wishCreateDto: WishCreateDto): Promise<boolean> {
    isWishCreateLoading.value = true;

    try {
      const wish = await WishService.create(wishCreateDto);
      if (!wish) return false;

      list.value.push(wish);

      return true;
    } finally {
      isWishCreateLoading.value = false;
    }
  }

  async function remove(id: string): Promise<boolean> {
    isWishDeleteLoading.value = true;

    try {
      const res = await WishService.delete(id);
      if (!res) return false;

      list.value.filter((wish) => wish.id !== id);

      return true;
    } finally {
      isWishDeleteLoading.value = false;
    }
  }

  function openDeleteDialog() {
    isDeleteDialogOpen.value = true;
  }

  function closeDeleteDialog() {
    isDeleteDialogOpen.value = false;
  }

  function openCreateDialog() {
    isCreateDialogOpen.value = true;
  }

  function closeCreateDialog() {
    isCreateDialogOpen.value = false;
  }

  return {
    list,
    isCreateDialogOpen,
    isDeleteDialogOpen,
    attributeList,
    isWishListLoading,
    isWishAttributeListLoading,
    isWishCreateLoading,
    isWishDeleteLoading,
    create,
    remove,
    fetchAllByCategory,
    fetchAttributeListByCategory,
    openDeleteDialog,
    closeDeleteDialog,
    openCreateDialog,
    closeCreateDialog,
  };
});
