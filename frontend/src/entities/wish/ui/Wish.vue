<script setup lang="ts">
import { type IWish } from '../model';
import WishAttribute from './WishAttribute.vue';

defineProps<IWish>();
</script>

<template>
  <div class="q-py-lg">
    <div class="wish row no-wrap bg-surface rounded-borders">
      <div class="wish__img row items-center justify-center bg-blue-grey-1 rounded-borders">
        <div>
          <q-icon name="photo_camera" size="xl" color="blue-grey-3" />
        </div>
      </div>
      <div class="q-ml-md">
        <div class="q-mb-md">
          <span class="text-h4">{{ name }}</span>
        </div>
        <div>
          <wish-attribute
            v-for="attribute in data"
            :key="attribute.key"
            :name="attribute.key"
            :value="attribute.value"
          />
        </div>
      </div>

      <q-space />

      <div class="wish__actions">
        <q-btn
          class="wish__button"
          icon-right="bi-three-dots-vertical"
          color="grey-6"
          no-caps
          flat
          fab-mini
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.wish {
  &__img {
    width: 160px;
    height: 160px;
  }

  &__actions {
    display: none;
  }

  &:hover .wish__actions {
    display: block;
  }
}
</style>
