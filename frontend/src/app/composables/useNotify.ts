import { useQuasar } from 'quasar';
import type { NotifyMessage } from '../enums/notifyMessage';

export const useNotify = () => {
  const $q = useQuasar();

  function show(type: 'negative' | 'positive', message: NotifyMessage): void {
    $q.notify({ type, message });
  }

  return { show };
};
