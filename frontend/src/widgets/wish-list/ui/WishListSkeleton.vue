<script setup lang="ts">
import { BCard } from 'src/shared/ui/card';
import { WishSkeleton } from 'src/entities/wish';
</script>

<template>
  <b-card class="wish-list full-width">
    <div class="wish-list__content full-height">
      <div>
        <div class="row items-center justify-between q-pb-md">
          <q-skeleton type="text" width="160px" />
          <q-skeleton type="QBtn" width="120px" />
        </div>

        <q-separator color="grey-3" />
      </div>

      <div>
        <q-scroll-area class="full-height q-pr-lg">
          <wish-skeleton v-for="i in 6" :key="i" />
        </q-scroll-area>
      </div>
    </div>
  </b-card>
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
