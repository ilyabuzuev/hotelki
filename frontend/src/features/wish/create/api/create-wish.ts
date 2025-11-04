import { type IWish, type ICreateWish, WishApi } from 'src/entities/wish';

export const createWish = async (data: ICreateWish): Promise<IWish> => {
  return WishApi.create(data);
};
