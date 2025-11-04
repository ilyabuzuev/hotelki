import { isWish } from 'src/entities/wish/@x/is-wish';
import type { IWishList } from '../model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isWishList = (data: any): data is IWishList => {
  return (
    data &&
    typeof data.id === 'string' &&
    typeof data.categoryType === 'string' &&
    typeof data.categoryId === 'string' &&
    typeof data.name === 'string' &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.data.every((item: any) => isWish(item))
  );
};
