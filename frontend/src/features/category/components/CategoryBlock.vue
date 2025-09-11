<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useCategoryStore } from '../store/categoryStore';
import { useWishStore } from 'src/features/wish/store/wishSore';
import { useNotify } from 'src/app/composables/useNotify';
import { NotifyMessage } from 'src/app/enums/notifyMessage';
import CategoryList from './CategoryList.vue';
import CategoryActions from './CategoryActions.vue';

const route = useRoute();
const notify = useNotify();
const category = useCategoryStore();
const wish = useWishStore();
const tab = ref();

class Validator {
  private static regex = /^[a-z]+$/;

  public static validate(str: string): boolean {
    return this.regex.test(str);
  }
}

async function fetchWishList() {
  await wish.fetchAllByCategory(tab.value);
}

onMounted(async () => {
  await category.fetchAll();

  const param = route.params.category;
  if (!param) return;

  const categoryName = param.toString();

  if (!Validator.validate(categoryName)) {
    notify.show('negative', NotifyMessage.CATEGORY_SYMBOL_ERROR);
    return;
  }

  const isCategoryExistingInList = category.checkExisting(categoryName);

  if (!isCategoryExistingInList) {
    notify.show('negative', NotifyMessage.CATEGORY_EXISTING_ERROR);
    return;
  }

  tab.value = categoryName;

  await fetchWishList();
});
</script>

<template>
  <q-tabs
    v-if="!category.loading"
    v-model="tab"
    @update:model-value="fetchWishList"
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
