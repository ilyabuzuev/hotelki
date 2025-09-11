<script setup lang="ts">
interface Props {
  name: string;
  value: string;
}

defineProps<Props>();
</script>

<template>
  <div class="row no-wrap items-center q-gutter-x-sm">
    <span class="text-h6">{{ name }}</span>
    <span class="text-h6 text-grey-6">{{ value }}</span>
  </div>
</template>
