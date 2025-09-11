import { useRoute } from 'vue-router';

export const useQuery = () => {
  const route = useRoute();

  function getParam(name: string): string | null {
    const param = route.params[name];

    if (!param) return null;
    if (typeof param === 'string') return param;
    if (param[0] && Array.isArray(param)) return param[0];

    return null;
  }

  return { getParam };
};
