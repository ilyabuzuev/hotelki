import type { IWish } from 'src/entities/wish/@x/wish';

export interface IWishList {
  id: string;
  categoryType: string;
  categoryId: string;
  name: string;
  data: IWish[];
}
