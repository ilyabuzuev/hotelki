<script setup lang="ts">
import { onMounted } from 'vue';
import CategoryBlock from 'src/features/category/components/CategoryBlock.vue';
import WishList from 'src/features/wish/components/WishList.vue';

onMounted(() => {
  console.log('mounted');
});
</script>

<template>
  <q-page class="home row">
    <category-block />
    <wish-list />
  </q-page>
</template>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 16px;
}
</style>
