<script setup lang="ts">
interface Props {
  label: string;
  tooltip?: string;
  required?: boolean;
  disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
  required: false,
  disabled: false,
});

const model = defineModel<string | null>({ required: true });
</script>

<template>
  <div>
    <div class="q-mb-sm">
      <span class="text-body1 text-grey-8">{{ label }}</span>
      <q-icon v-if="tooltip" class="q-ml-sm" name="info" color="primary" size="sm">
        <q-tooltip transition-show="fade" transition-hide="fade">
          <span class="text-body1">{{ tooltip }}</span>
        </q-tooltip>
      </q-icon>
    </div>
    <q-input
      v-model="model"
      outlined
      clearable
      dense
      lazy-rules
      :rules="[(val) => (val && val.length > 0) || 'Данное поле обязательно']"
      :disable="disabled"
    />
  </div>
</template>
