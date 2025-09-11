<script setup lang="ts">
import { ref } from 'vue';
import WishAttribute from './WishAttribute.vue';
import WishDeleteDialog from './WishDeleteDialog.vue';

interface Props {
  id: string;
  name: string;
  data: {
    key: string;
    value: string;
  }[];
  createdAt: string;
}

defineProps<Props>();

const refWishDeleteDialog = ref<InstanceType<typeof WishDeleteDialog> | null>(null);

function onDeleteClick() {
  if (refWishDeleteDialog.value) {
    refWishDeleteDialog.value.open();
  }
}
</script>

<template>
  <div class="wish row no-wrap q-pa-md bg-surface rounded-borders">
    <div>
      <div class="q-mb-md">
        <span class="text-h4">{{ name }}</span>
      </div>
      <div>
        <wish-attribute
          v-for="attribute in data"
          :key="attribute.key"
          :name="attribute.key"
          :value="attribute.value"
        />
      </div>
    </div>

    <q-space />

    <div>
      <q-btn @click="onDeleteClick" icon-right="delete" color="negative" no-caps flat fab-mini />
    </div>
  </div>

  <wish-delete-dialog ref="refWishDeleteDialog" :id="id" />
</template>
