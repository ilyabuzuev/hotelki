<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';
import { BContainer } from 'src/shared/ui/container';
import { useCategoryStore, useCategoryListStore } from 'src/entities/category';
import { CategoryList } from 'src/widgets/category-list';
import { WishList } from 'src/widgets/wish-list';
import { CreateCategoryDialog } from 'src/widgets/create-category-dialog';
import { CreateAttributeDialog } from 'src/widgets/create-attribute-dialog';
import { CreateWishDialog } from 'src/widgets/create-wish-dialog';

const categoryListStore = useCategoryListStore();
const categoryStore = useCategoryStore();
const createCategoryDialogRef = useTemplateRef('createCategoryDialogRef');
const createAttributeDialogRef = useTemplateRef('createAttributeDialogRef');
const createWishDialogRef = useTemplateRef('createWishDialogRef');


onMounted(async () => {
  await categoryListStore.fetchAll();
});
</script>

<template>
  <q-page class="index-page">
    <b-container class="index-page__container">
      <category-list @create="createCategoryDialogRef?.open" />
      <wish-list @create="createWishDialogRef?.open" />
    </b-container>

    <create-category-dialog
      @create-attribute="createAttributeDialogRef?.open"
      ref="createCategoryDialogRef"
    />

    <create-attribute-dialog ref="createAttributeDialogRef" />

    <create-wish-dialog
      v-if="categoryStore.current.id"
      ref="createWishDialogRef"
      :category-id="categoryStore.current.id"
    />
  </q-page>
</template>

<style scoped lang="scss">
.index-page__container {
  display: grid;
  grid-template-columns: 300px 1fr;
  align-items: start;
  gap: 32px;
}
</style>
