<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import CategoryList from './CategoryList.vue';
import CategoryActions from './CategoryActions.vue';
import { useRoute } from 'vue-router';
import { useCategoryStore } from '../store/categoryStore';
import { useWishStore } from 'src/features/wish/store/wishSore';

const route = useRoute();
const $q = useQuasar();
const categoryStore = useCategoryStore();
const wishStore = useWishStore();
const tab = ref();

function onTabUpdate() {
  wishStore.fetchWishList(tab.value);
}

onMounted(async () => {
  await categoryStore.fetchCategoryList();

  const category = route.params.category;
  if (!category) return;

  const categoryName = category.toString();
  const isCategoryExistingInList = categoryStore.checkCategoryExistingByName(categoryName);

  if (!isCategoryExistingInList) {
    $q.notify({
      type: 'negative',
      message: 'Категории, указанной в адресной строке не существует в списке категорий',
    });

    return;
  }

  tab.value = categoryName;
  wishStore.fetchWishList(categoryName);
});
</script>

<template>
  <q-tabs
    v-if="!categoryStore.loading"
    v-model="tab"
    @update:model-value="onTabUpdate"
    vertical
    class="text-grey-6"
    active-color="primary"
    indicator-color="transparent"
    inline-label
    dense
    align="right"
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
