<script setup lang="ts">
import { ref } from 'vue';
import AppInputField from 'src/shared/components/AppInputField.vue';
import { useWishStore } from '../store/wishSore';
import type { WishCreateDto } from '../api/dto/WishCreateDto';
import { useNotify } from 'src/app/composables/useNotify';
import { NotifyMessage } from 'src/app/enums/notifyMessage';

const wish = useWishStore();
const notify = useNotify();
const name = ref<string | null>(null);
// const img = ref<string | null>(null);

async function onSubmit() {
  console.log(wish.attributeList);

  const newWish: WishCreateDto = {
    categoryType: 'skirts',
    name: name.value!,
    data: wish.attributeList.map((attribute) => {
      return {
        key: attribute.name,
        value: attribute.value!,
      };
    }),
  };

  const res = await wish.create(newWish);

  if (res) {
    wish.closeCreateDialog();
    name.value = null;
    notify.show('positive', NotifyMessage.WISH_SUCCESS_CREATE);
    return;
  }

  notify.show('positive', NotifyMessage.WISH_NEGATIVE_CREATE);
}

function onCancel() {
  wish.closeCreateDialog();
}
</script>

<template>
  <q-dialog v-model="wish.isCreateDialogOpen" persistent>
    <q-card class="q-pa-sm" style="width: 500px">
      <q-form @submit="onSubmit" greedy>
        <q-card-section class="row items-center">
          <span class="text-h6">Создание хотелки</span>
        </q-card-section>

        <q-card-section>
          <div class="q-gutter-y-xs">
            <app-input-field v-model="name" label="Название" />

            <!-- <app-input-field v-model="img" label="Фотография" /> -->

            <div v-for="(attribute, index) in wish.attributeList" :key="index">
              <app-input-field
                v-if="attribute.type === 'String'"
                v-model="attribute.value"
                :label="attribute.name"
              />

              <q-input
                v-if="attribute.type === 'Price'"
                v-model="attribute.value"
                :label="attribute.name"
                mask="#.##"
                fill-mask="0"
                reverse-fill-mask
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="center">
          <q-btn type="submit" label="Готово" color="primary" unelevated no-caps />
          <q-btn @click="onCancel" label="Отмена" color="secondary" flat no-caps />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>
