import { api } from 'src/app/boot/axios';
import { type IWishList, type IWishListDto } from '../model';
import { adaptWishListDto } from './mapper';

const getOneByCategory = async (category: string): Promise<IWishList | undefined> => {
  const res = await api.get<IWishListDto>(`wish-list/${category}`);
  if (res.status !== 200) return;
  return adaptWishListDto(res.data);
};

export const WishListApi = {
  getOneByCategory,
};
