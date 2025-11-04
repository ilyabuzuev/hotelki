import { ref } from 'vue';
import { defineStore } from 'pinia';
import { NotifyMessage } from 'src/shared/lib/notify';
import type { APIError } from 'src/shared/types/error';
import type { IAttribute } from '../attribute';

export const useAttributeListStore = defineStore('attribute-list', () => {
  const data = ref<IAttribute[]>([]);

  const add = (attribute: IAttribute): true | APIError => {
    const isAttributeExist = checkAttrbiteExistingByName(attribute.name);

    if (!isAttributeExist) {
      data.value.push(attribute);
      return true;
    }

    return { message: NotifyMessage.ATTRIBUTE_EXISTING_ERROR };
  };

  const remove = (name: IAttribute['name']): void => {
    const isAttributeExist = checkAttrbiteExistingByName(name);

    if (!isAttributeExist) {
      return;
    }

    data.value = data.value.filter((attribute) => attribute.name !== name);
  };

  const checkAttrbiteExistingByName = (name: IAttribute['name']): boolean => {
    return Boolean(data.value.find((attribute) => attribute.name === name));
  };

  return {
    data,
    add,
    remove,
  };
});
