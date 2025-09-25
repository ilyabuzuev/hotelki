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
    color="primary"
    icon-right="add"
    :loading="wish.isWishAttributeListLoading"
    fab-mini
    flat
    no-caps
  >
    <q-tooltip transition-show="fade" transition-hide="fade"> Привет </q-tooltip>
  </q-btn>

  <wish-create-dialog />
</template>
