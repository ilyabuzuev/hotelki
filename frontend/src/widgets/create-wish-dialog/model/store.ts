import { defineStore } from 'pinia';
import { type IAttribute, AttributeApi } from 'src/entities/attribute';
import { ref } from 'vue';

interface IAttributeField extends IAttribute {
  value: string | null;
}

export const useAttributeListStore = defineStore('wish-attribute-list', () => {
  const data = ref<IAttributeField[]>([]);
  const loading = ref(false);

  const fetchAllById = async (id: string) => {
    loading.value = true;

    try {
      const res = await AttributeApi.getAllById(id);

      data.value = res.map((attribute) => {
        return {
          name: attribute.name,
          type: attribute.type,
          value: null,
        };
      });
    } finally {
      loading.value = false;
    }
  };

  const reset = () => {
    data.value = [];
  };

  return {
    data,
    loading,
    fetchAllById,
    reset,
  };
});
