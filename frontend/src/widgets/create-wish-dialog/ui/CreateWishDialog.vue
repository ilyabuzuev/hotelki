<script setup lang="ts">
import { ref } from 'vue';
import { useDialog } from 'src/shared/lib/dialog';
import { BCard } from 'src/shared/ui/card';
import { BInputField } from 'src/shared/ui/input-field';
import { createWish } from 'src/features/wish/create';
import { useAttributeListStore } from '../model';
import { useWishListStore } from 'src/entities/wish-list';

interface Props {
  categoryId: string;
}

const props = defineProps<Props>();

const { isOpen, ...dialog } = useDialog();
const attributeListStore = useAttributeListStore();
const wishList = useWishListStore();
const name = ref<string | null>(null);
const loading = ref(false);

const open = async () => {
  dialog.open();

  await attributeListStore.fetchAllById(props.categoryId);
};

const close = () => {
  dialog.close();
};

const onSubmit = async () => {
  if (wishList.current === null) return;

  loading.value = true;

  try {
    const res = await createWish({
      name: name.value!,
      wishListId: wishList.current.id,
      data: attributeListStore.data.map((attribute) => {
        return {
          key: attribute.name,
          value: attribute.value!,
        };
      }),
    });

    wishList.addWish(res);
    attributeListStore.reset();
    name.value = null;
    close();
  } finally {
    loading.value = false;
  }
};

const onCancel = () => {
  name.value = null;
  loading.value = false;

  attributeListStore.reset();
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
          <span class="text-h6">Создание хотелки</span>
        </q-card-section>

        <q-card-section>
          <div class="q-gutter-y-md">
            <b-input-field v-model="name" label="Название" required :disabled="loading" />

            <!-- <app-input-field v-model="img" label="Фотография" /> -->

            <div v-if="attributeListStore.data.length > 0">
              <div v-for="(attribute, index) in attributeListStore.data" :key="index">
                <b-input-field
                  v-if="attribute.type === 'String'"
                  v-model="attribute.value"
                  :label="attribute.name"
                  :disabled="loading"
                  required
                />

                <q-input
                  v-if="attribute.type === 'Price'"
                  v-model="attribute.value"
                  mask="#.##"
                  fill-mask="0"
                  :label="attribute.name"
                  :disable="loading"
                  reverse-fill-mask
                  outlined
                  dense
                />
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-actions class="q-pa-md" align="center">
          <q-btn
            type="submit"
            label="Создать"
            color="primary"
            :loading="loading"
            :disable="loading"
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
    </b-card>
  </q-dialog>
</template>
