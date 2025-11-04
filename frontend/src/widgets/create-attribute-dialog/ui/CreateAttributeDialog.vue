<script setup lang="ts">
import { ref } from 'vue';
import { BCard } from 'src/shared/ui/card';
import { BInputField } from 'src/shared/ui/input-field';
import { useNotify, NotifyMessage } from 'src/shared/lib/notify';
import { type AttributeType, useAttributeListStore } from 'src/entities/attribute';

const attributeListStore = useAttributeListStore();
const { show } = useNotify();
const isOpen = ref(false);
const name = ref<string | null>(null);
const type = ref<AttributeType | null>(null);

const open = () => (isOpen.value = true);

const close = () => (isOpen.value = false);

function onSubmit() {
  const res = attributeListStore.add({ name: name.value!, type: type.value! });

  if (res !== true) {
    show('negative', NotifyMessage.ATTRIBUTE_EXISTING_ERROR);
    return;
  }

  resetFieds();
  close();
}

function onCancel() {
  resetFieds();
  close();
}

function resetFieds() {
  name.value = null;
  type.value = null;
}

defineExpose({
  open,
  close,
});
</script>

<template>
  <q-dialog v-model="isOpen" persistent>
    <b-card class="relative-position overflow-hidden" style="width: 400px">
      <q-form @submit="onSubmit" greedy>
        <q-card-section class="row items-center">
          <span class="text-h6">Создание атрибута</span>
        </q-card-section>

        <q-card-section>
          <div class="q-gutter-y-md">
            <b-input-field v-model="name" label="Наименование аттрибута" required />

            <div>
              <span class="text-body1 text-grey-8">Тип аттрибута</span>
              <q-select
                v-model="type"
                :options="['String', 'Number', 'Price']"
                :rules="[(val) => (val && val.length > 0) || 'Данное поле обязательно']"
                lazy-rules
                outlined
                dense
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn type="submit" label="Готово" color="primary" unelevated no-caps />
          <q-btn @click="onCancel" label="Отмена" color="secondary" flat no-caps />
        </q-card-actions>
      </q-form>
    </b-card>
  </q-dialog>
</template>
