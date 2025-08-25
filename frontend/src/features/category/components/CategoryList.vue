<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCategoryStore } from '../store/categoryStore';

const router = useRouter();
const categoryStore = useCategoryStore();

async function onCategoryClick(category: string): Promise<void> {
  await router.push('/' + category);
}
</script>

<template>
  <q-tab
    class="rounded-borders"
    v-for="category in categoryStore.list"
    @click="onCategoryClick(category.name)"
    :key="category.id"
    :name="category.name"
    :label="category.label"
    no-caps
  />
</template>

<style lang="scss" scoped>
.q-tab {
  justify-content: start;
}
</style>
