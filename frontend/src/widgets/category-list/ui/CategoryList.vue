<script setup lang="ts">
import { BCard } from 'src/shared/ui/card';
import { Category, useCategoryStore, useCategoryListStore } from 'src/entities/category';

const categoryListStore = useCategoryListStore();
const categoryStore = useCategoryStore();
</script>

<template>
  <b-card class="full-width">
    <div v-if="categoryListStore.loading" class="column q-gutter-y-md q-mb-md">
      <q-skeleton type="text" width="100px" />
      <q-skeleton type="text" width="120px" />
      <q-skeleton type="text" width="80px" />
      <q-skeleton type="text" width="140px" />
      <q-skeleton type="text" width="100px" />
      <q-skeleton type="text" width="120px" />
      <q-skeleton type="text" width="80px" />
      <q-skeleton type="text" width="140px" />
    </div>

    <div v-else-if="categoryListStore.data.length > 0">
      <q-tabs
        v-model="categoryStore.current.value"
        class="text-grey-6 q-mb-md"
        active-color="primary"
        indicator-color="transparent"
        align="right"
        inline-label
        vertical
        dense
      >
        <category
          v-for="category in categoryListStore.data"
          :key="category.id"
          :id="category.id"
          :name="category.name"
          :value="category.value"
        />
      </q-tabs>

      <q-separator class="q-mb-md" color="grey-3" />
    </div>

    <div v-else class="q-mb-md text-center text-body1 text-grey-8">Список категорий пуст ;(</div>

    <q-btn
      @click="$emit('create')"
      class="full-width"
      label="Создать"
      color="primary"
      icon-right="add"
      fab-mini
      flat
      no-caps
    />

    <!-- <category-create /> -->
  </b-card>
</template>
