import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Attribute } from '../api/types/Attribute';

type Attr = Omit<Attribute, 'value'>;

export const useAttributeStore = defineStore('attribute', () => {
  const list = ref<Attr[]>([]);

  function addAttribute(attribute: Attr): void | false {
    const isAttributeExist = checkAttributeExistingByName(attribute.name);
    if (isAttributeExist) return false;
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
