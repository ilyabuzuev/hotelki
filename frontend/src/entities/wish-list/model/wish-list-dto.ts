import type { IWishDto } from 'src/entities/wish/@x/wish-dto';

export interface IWishListDto {
  id: string;
  categoryType: string;
  categoryId: string;
  name: string;
  data: IWishDto[];
}
