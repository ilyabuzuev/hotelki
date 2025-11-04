import type { ICategory } from '../model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isCategory = (data: any): data is ICategory => {
  return (
    data &&
    typeof data.id === 'string' &&
    typeof data.name === 'string' &&
    typeof data.value === 'string'
  );
};
