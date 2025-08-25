import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Attribute } from '../api/types/Attribute';

export const useAttributeStore = defineStore('attribute', () => {
  const list = ref<Attribute[]>([]);

  function addAttribute(attribute: Attribute): void | false {
    const isAttributeExist = checkAttributeExistingByName(attribute.name);

    if (isAttributeExist) {
      return false;
    }

    list.value.push(attribute);
  }

  function deleteAttribute(name: string) {
    list.value = list.value.filter((attribute) => attribute.name !== name);
  }

  function checkAttributeExistingByName(name: string): boolean {
    return list.value.find((attribute) => attribute.name === name) ? true : false;
  }

  function reset() {
    list.value = [];
  }

  return {
    list,
    addAttribute,
    deleteAttribute,
    reset,
  };
});
