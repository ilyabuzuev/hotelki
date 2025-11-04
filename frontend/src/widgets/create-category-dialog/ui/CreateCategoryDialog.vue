<script setup lang="ts">
import { ref } from 'vue';
import { BCard } from 'src/shared/ui/card';
import { useNotify } from 'src/shared/lib/notify';
import { BInputField } from 'src/shared/ui/input-field';
import { useAttributeListStore, Attribute } from 'src/entities/attribute';
import { createCategory } from 'src/features/category/create';
import { useDialog } from 'src/shared/lib/dialog';

defineEmits(['create-attribute']);

const attributeListStore = useAttributeListStore();
const { show } = useNotify();
const { isOpen, close, open } = useDialog();
const name = ref<string | null>(null);
const value = ref<string | null>(null);
const loading = ref(false);

const onSubmit = async () => {
  loading.value = true;

  try {
    const res = await createCategory({
      name: name.value!,
      value: value.value!,
      attributes: attributeListStore.data,
    });

    if (res !== true) {
      show('negative', res.message);
      return;
    }

    close();
  } finally {
    loading.value = false;
  }
};

const onCancel = () => {
  name.value = null;
  value.value = null;
  loading.value = false;

  close();
};

defineExpose({
  open,
  close,
});
</script>

<template>
  <q-dialog v-model="isOpen" persistent>
    <b-card class="relative-position overflow-hidden" style="width: 500px">
      <q-form @submit="onSubmit" greedy>
        <q-card-section class="row items-center">
          <span class="text-h6">Создание категории</span>
        </q-card-section>

        <q-card-section class="column q-gutter-y-sm">
          <b-input-field v-model="name" label="Наименование" :disabled="loading" outlined dense />
          <b-input-field v-model="value" label="Значение" :disabled="loading" outlined dense />
        </q-card-section>

        <q-card-section v-if="attributeListStore.data.length > 0">
          <attribute
            v-for="(attribute, index) in attributeListStore.data"
            @delete="attributeListStore.remove(attribute.name)"
            :key="index"
            v-bind="attribute"
          />
          <!-- <div v-else>Атрибутов еще нет</div> -->
        </q-card-section>

        <q-card-section class="q-py-none">
          <q-btn
            @click="$emit('create-attribute')"
            label="Добавить атрибут"
            color="primary"
            icon-right="bi-plus"
            :disabled="loading"
            no-caps
            flat
          />
        </q-card-section>

        <q-card-actions class="q-pa-md" align="center">
          <q-btn
            type="submit"
            label="Создать"
            color="primary"
            :loading="loading"
            unelevated
            no-caps
          />
          <q-btn
            @click="onCancel"
            label="Отменить"
            color="secondary"
            :disable="loading"
            flat
            no-caps
          />
        </q-card-actions>
      </q-form>

      <!-- <div v-if="loading" class="absolute-full row items-center justify-center bg-white">
        <div class="column items-center">
          <q-circular-progress class="q-ma-md" size="50px" color="primary" indeterminate rounded />
          <div>Подожди позязя</div>
        </div>
      </div> -->
    </b-card>
  </q-dialog>
</template>
