<script setup lang="ts">
import { onMounted } from 'vue';
import { useCategoryStore } from '../store/categoryStore';
import { useWishStore } from 'src/features/wish/store/wishSore';
import CategoryList from './CategoryList.vue';
import CategoryActions from './CategoryActions.vue';

const category = useCategoryStore();
const wish = useWishStore();

// class Validator {
//   private static regex = /^[a-z]+$/;

//   public static validate(str: string): boolean {
//     return this.regex.test(str);
//   }
// }

// async function fetchWishList() {
//   await wish.fetchAllByCategory(tab.value);
// }

async function updateCurrentCategory(name: string) {
  category.setCurrent(name);
  await wish.fetchAllByCategory(name);
}

onMounted(async () => {
  await category.fetchAll();

  // const isCategoryExistingInList = category.checkExisting(categoryName);

  // if (!isCategoryExistingInList) {
  //   notify.show('negative', NotifyMessage.CATEGORY_EXISTING_ERROR);
  //   return;
  // }

  // await fetchWishList();
});
</script>

<template>
  <q-tabs
    v-if="!category.loading"
    v-model="category.current"
    @update:model-value="updateCurrentCategory"
    class="text-grey-6"
    active-color="primary"
    indicator-color="transparent"
    align="right"
    inline-label
    vertical
    dense
  >
    <category-list />
    <category-actions />
  </q-tabs>
  <div v-else>loading...</div>
</template>

<style lang="scss" scoped>
.q-tab {
  justify-content: start;
}
</style>
