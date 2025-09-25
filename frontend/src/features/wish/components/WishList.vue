<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useWishStore } from '../store/wishSore';
import Wish from './Wish.vue';
import WishActions from './WishActions.vue';
import { onMounted } from 'vue';
import { useCategoryStore } from 'src/features/category/store/categoryStore';

const wish = useWishStore();
const category = useCategoryStore();
const { list, isWishListLoading } = storeToRefs(wish);

onMounted(async () => {
  if (category.current) {
    await wish.fetchAllByCategory(category.current);
  }
});
</script>

<template>
  <div v-if="category.current">
    <div v-if="!isWishListLoading && list">
      <div class="q-mb-md">
        <wish-actions />
      </div>
      <div class="column q-gutter-y-md">
        <div v-for="wish in list" :key="wish.id">
          <Wish v-bind="wish" />
        </div>
      </div>
    </div>
    <div v-if="isWishListLoading">loading...</div>
  </div>
</template>
