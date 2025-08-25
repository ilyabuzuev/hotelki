<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useCategoryStore } from '../store/categoryStore';
import { useAttributeStore } from 'src/features/attribute/store/attributeStore';
import AppInputField from 'src/shared/components/AppInputField.vue';
import AttributeList from 'src/features/attribute/components/AttributeList.vue';
import type { CategoryCreateDto } from '../api/dto/CategoryCreateDto';

const model = defineModel<boolean>({ required: true });
const $q = useQuasar();
const categoryStore = useCategoryStore();
const attributeStore = useAttributeStore();
const name = ref<string | null>(null);
const value = ref<string | null>(null);

async function onSubmit() {
  if (!name.value || !value.value) {
    // $q.notify({ type: 'negative', message: 'Не все поля заполнены' });
    return;
  }

  const category: CategoryCreateDto = {
    name: name.value,
    value: value.value,
  };

  const res = await categoryStore.create(category);

  console.log(attributeStore.list);

  if (!res) {
    $q.notify({ type: 'negative', message: 'Категория с таким наименованием уже существует' });
    return;
  }

  model.value = false;
  attributeStore.reset();
  resetFieds();
}

function onCancel() {
  model.value = false;
  attributeStore.reset();
  resetFieds();
}

function resetFieds() {
  name.value = null;
  value.value = null;
}
</script>

<template>
  <q-dialog v-model="model" persistent>
    <q-card class="q-pa-sm" style="width: 500px">
      <q-form @submit="onSubmit" greedy>
        <q-card-section class="row items-center">
          <span class="text-h6">Создание категории</span>
        </q-card-section>

        <q-card-section>
          <div class="q-gutter-y-md">
            <app-input-field v-model="name" label="Наименование категории" tooltip="test" />
            <app-input-field v-model="value" label="Значение" tooltip="test" />
          </div>
        </q-card-section>

        <q-card-section>
          <attribute-list />
        </q-card-section>

        <q-card-actions align="center">
          <q-btn type="submit" label="Готово" color="primary" unelevated no-caps />
          <q-btn @click="onCancel" label="Отмена" color="secondary" flat no-caps />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>
