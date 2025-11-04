import { ref } from 'vue';

export const useDialog = () => {
  const isOpen = ref(false);

  const open = () => (isOpen.value = true);

  const close = () => (isOpen.value = false);

  return { isOpen, open, close };
};
