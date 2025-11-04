import { api } from 'src/app/boot/axios';
import type { APIError } from 'src/shared/types/error';
import { NotifyMessage } from 'src/shared/lib/notify';
import type { IWishList, IWishListDto } from '../model';
import { adaptWishListDto } from './mapper';
import { isWishListDto } from '../lib';

export const getByCategoryType = async (type: string): Promise<IWishList | APIError> => {
  const res = await api.get<IWishListDto | APIError>(`/wish-list/${type}`);

  if (isWishListDto(res.data)) {
    return adaptWishListDto(res.data);
  }

  return { message: NotifyMessage.WISH_NEGATIVE_CREATE };
};
