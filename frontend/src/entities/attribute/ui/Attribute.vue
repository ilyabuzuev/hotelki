<script setup lang="ts">
import { type AttributeType } from '../model';

interface Props {
  name: string;
  type: AttributeType;
}

defineEmits(['delete']);
defineProps<Props>();
</script>

<template>
  <div class="row q-gutter-x-sm items-center full-width">
    <span class="text-body1">{{ name }}</span>

    <q-badge class="q-px-sm q-py-xs text-overline" :label="type" />

    <slot name="attribute-delete" />

    <q-btn
      @click="$emit('delete')"
      class="q-ml-auto"
      color="negative"
      icon-right="mdi-trash-can-outline"
      flat
      no-caps
      fab-mini
    />
  </div>
</template>
