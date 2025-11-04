import { isWishDto } from 'src/entities/wish/@x/is-wish-dto';
import type { IWishListDto } from '../model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isWishListDto = (data: any): data is IWishListDto => {
  return (
    data &&
    typeof data.id === 'string' &&
    typeof data.categoryType === 'string' &&
    typeof data.categoryId === 'string' &&
    typeof data.name === 'string' &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data.data.every((item: any) => isWishDto(item))
  );
};
