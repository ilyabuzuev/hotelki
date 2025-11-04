<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getRandomInt } from 'src/shared/lib/number';

interface Props {
  letter: string;
}

defineProps<Props>();

const color = ref<string>();
const colors: string[] = ['red', 'green', 'rose', 'cyan', 'blue', 'amber', 'orange'];
const colorLevels: number[] = [4, 5, 6, 7];
const colorMap: string[] = [];

function mapColors(): void {
  colors.forEach((color) => {
    colorLevels.forEach((lelel) => {
      colorMap.push(String(`${color}-${lelel}`));
    });
  });
}

function getRandomColor(): string {
  return colorMap[getRandomInt(0, colorMap.length - 1)]!;
}

function updateColor() {
  color.value = getRandomColor();
}

function startAnimation() {
  setInterval(() => {
    updateColor();
  }, 500);
}

onMounted(() => {
  mapColors();
  updateColor();
  startAnimation();
});
</script>

<template>
  <span :class="['text-h3', `text-${color}`]">
    {{ letter }}
  </span>
</template>
