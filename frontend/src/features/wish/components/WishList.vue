<script setup lang="ts">
import { useWishStore } from '../store/wishSore';

const wishStore = useWishStore();
</script>

<template>
  <div v-if="wishStore.list">
    <div class="q-mb-md">
      <q-btn label="Добавить хотелку" color="primary" icon-right="add" unelevated no-caps />
    </div>
    <div>
      {{ wishStore.list }}
    </div>
  </div>
</template>
