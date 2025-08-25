<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useAttributeStore } from '../store/attributeStore';
import AppInputField from 'src/shared/components/AppInputField.vue';
import type { Attribute } from '../api/types/Attribute';

const model = defineModel<boolean>({ required: true });
const $q = useQuasar();
const attributeStore = useAttributeStore();
const name = ref<string | null>(null);
const type = ref(null);

function onSubmit() {
  const attribute: Attribute = {
    name: name.value!,
    type: type.value!,
  };

  const res = attributeStore.addAttribute(attribute);

  if (res === false) {
    $q.notify({ type: 'negative', message: 'Аттрибут уже существует' });
    return;
  }

  model.value = false;
  resetFieds();
}

function onCancel() {
  model.value = false;
  resetFieds();
}

function resetFieds() {
  name.value = null;
  type.value = null;
}
</script>

<template>
  <q-dialog v-model="model" persistent>
    <q-card class="q-pa-sm" style="width: 400px">
      <q-card-section class="row items-center">
        <span class="text-h6">Создание атрибута</span>
      </q-card-section>

      <q-card-section>
        <div class="q-gutter-y-md">
          <app-input-field v-model="name" label="Наименование аттрибута" />

          <div>
            <span class="text-body1 text-grey-8">Тип аттрибута</span>
            <q-select v-model="type" :options="['String', 'Price']" outlined dense />
          </div>
        </div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn @click="onSubmit" label="Готово" color="primary" unelevated no-caps />
        <q-btn @click="onCancel" label="Отмена" color="secondary" flat no-caps />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
