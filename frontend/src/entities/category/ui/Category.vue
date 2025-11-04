<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useCategoryStore } from '../model';

interface Props {
  id: string;
  name: string;
  value: string;
}

const props = defineProps<Props>();
const router = useRouter();
const categoryStore = useCategoryStore();

async function onClick() {
  categoryStore.current = props;
  await router.push(`/${props.value}`);
}
</script>

<template>
  <div class="category row items-center q-gutter-x-sm">
    <q-tab @click="onClick" class="row q-px-md text-h6 rounded-borders" :name="value" no-caps>
      <span>{{ name }}</span>
    </q-tab>
    <!-- <div class="category__button">
      <q-btn icon="bi-trash" color="negative" flat fab-mini />
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.category {
  &__button {
    display: none;
  }

  &:hover .category__button {
    display: block;
  }
}

.q-tab {
  justify-content: start;
}
</style>
