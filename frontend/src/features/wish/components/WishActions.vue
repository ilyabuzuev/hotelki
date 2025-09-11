<script setup lang="ts">
import WishCreateDialog from './WishCreateDialog.vue';
import { useWishStore } from '../store/wishSore';

const wish = useWishStore();

async function onClick() {
  await wish.fetchAttributeListByCategory('skirts');

  wish.openCreateDialog();
}
</script>

<template>
  <q-btn
    @click="onClick"
    label="Добавить хотелку"
    color="primary"
    icon-right="add"
    unelevated
    no-caps
    :loading="wish.isWishAttributeListLoading"
  />

  <wish-create-dialog />
</template>
