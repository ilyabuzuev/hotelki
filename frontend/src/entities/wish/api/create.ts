import { api } from 'src/app/boot/axios';
import type { ICreateWish, IWish, IWishDto } from '../model';
import { adaptWishDto } from './mapper';

export const create = async (data: ICreateWish): Promise<IWish> => {
  const res = await api.post<IWishDto>('/wish/create', data);
  return adaptWishDto(res.data);
};
