<script setup lang="ts"></script>

<template>
  <q-card class="bg-surface q-pa-md">
    <slot />
  </q-card>
</template>

<style lang="scss" scoped>
.q-card {
  box-shadow: 0 3px 8px 2px rgba(141, 143, 168, 0.14);
  border-radius: 18px;
}
</style>
