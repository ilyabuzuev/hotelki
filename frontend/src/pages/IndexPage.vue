<script setup lang="ts">
import { onMounted, watch } from 'vue';
import CategoryBlock from 'src/features/category/components/CategoryBlock.vue';
import WishList from 'src/features/wish/components/WishList.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  console.log('mounted');
});

watch(
  () => route.params,
  () => {
    console.log('change route');
  },
);
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
