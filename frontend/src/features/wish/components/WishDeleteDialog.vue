<script setup lang="ts">
import { ref } from 'vue';
import { useWishStore } from '../store/wishSore';

defineProps<{ id: string }>();

const wish = useWishStore();
const isOpen = ref(false);

function open(): void {
  console.log('open');

  isOpen.value = true;
}

function close(): void {
  isOpen.value = false;
}

defineExpose<{ open: () => void; close: () => void }>({
  open,
  close,
});
</script>

<template>
  <q-dialog v-model="isOpen" persistent>
    <q-card class="q-pa-sm" style="width: 500px">
      <div>
        {{ id }}
      </div>
      <q-card-section class="row items-center">
        <span class="text-h6">Удаление хотелки</span>
      </q-card-section>

      <q-card-section>
        <span class="text-h6">Ты хочешь удалить эту хотелку? :(</span>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn @click="wish.remove(id)" label="Готово" color="primary" unelevated no-caps />
        <q-btn @click="close" label="Отмена" color="secondary" flat no-caps />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
