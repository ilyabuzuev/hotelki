<script setup lang="ts">
import { ref } from 'vue';
import CategoryCreateDialog from './CategoryCreateDialog.vue';

const isCreateDialoOpen = ref(false);
</script>

<template>
  <q-btn
    @click="isCreateDialoOpen = true"
    class="full-width"
    color="primary"
    icon-right="add"
    label="Добавить"
    flat
    no-caps
  />

  <category-create-dialog v-model="isCreateDialoOpen" />
</template>
