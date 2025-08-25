<script setup lang="ts">
import { ref } from 'vue';
import { useAttributeStore } from '../store/attributeStore';
import Attribute from './Attribute.vue';
import AttributeCreateDialog from './AttributeCreateDialog.vue';

const attributeStore = useAttributeStore();
const isCreateDialogOpen = ref(false);

function onDelete(name: string) {
  attributeStore.deleteAttribute(name);
}
</script>

<template>
  <div>
    <div class="column">
      <attribute
        v-for="attribute in attributeStore.list"
        :key="attribute.name"
        @delete="onDelete(attribute.name)"
        :name="attribute.name"
        :type="attribute.type"
      />
    </div>
    <q-btn
      @click="isCreateDialogOpen = true"
      color="primary"
      icon-right="add"
      label="Добавить атрибут"
      flat
      no-caps
    />
  </div>

  <attribute-create-dialog v-model="isCreateDialogOpen" />
</template>
