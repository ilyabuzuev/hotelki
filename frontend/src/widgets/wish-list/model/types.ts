import { type IWishDto, type IWish } from 'src/entities/wish';

export interface IWishListDto {
  id: string;
  categoryType: string;
  name: string;
  data: IWishDto[];
  createdAt: string;
  updatedAt: string;
}

export interface IWishList {
  id: string;
  categoryType: string;
  name: string;
  data: IWish[];
  createdAt: string;
  updatedAt: string;
}
