<script setup lang="ts">
import BAnimatedLetter from './BAnimatedLetter.vue';

interface Props {
  label: string;
}

defineProps<Props>();
</script>

<template>
  <div class="row">
    <b-animated-letter v-for="(letter, index) in label.split('')" :key="index" :letter="letter" />
  </div>
</template>
