<script setup lang="ts">
import { BCard } from 'src/shared/ui/card';
import { Wish } from 'src/entities/wish';
import { useWishListStore } from 'src/entities/wish-list';
import WishListSkeleton from './WishListSkeleton.vue';

// interface Props {
//   title: string;
// }

defineEmits(['create']);

const wishList = useWishListStore();

// defineProps<Props>();
</script>

<template>
  <div v-if="wishList.loading">
    <wish-list-skeleton />
  </div>
  <div v-else-if="wishList.current">
    <b-card class="wish-list full-width">
      <div class="wish-list__content full-height">
        <div>
          <div class="row items-center justify-between q-pb-md">
            <span class="text-h5">{{ wishList.current.name }}</span>

            <q-btn
              @click="$emit('create')"
              label="Добавить"
              icon-right="add"
              color="primary"
              fab
              flat
              no-caps
            />
          </div>

          <q-separator color="grey-3" />
        </div>

        <div v-if="wishList.current.data.length > 0">
          <q-scroll-area class="full-height q-pr-lg">
            <wish v-for="wish in wishList.current.data" v-bind="wish" :key="wish.id" />
          </q-scroll-area>
        </div>
        <div v-else class="row items-center justify-center full-height">Хотелочеков еще неть</div>
      </div>
    </b-card>
  </div>
</template>

<style lang="scss" scoped>
.wish-list {
  height: 860px;

  &__content {
    display: grid;
    grid-template-rows: max-content 1fr;
  }
}
</style>
