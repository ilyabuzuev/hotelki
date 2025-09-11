import type { WishDto } from '../dto/WishDto';
import type { Wish } from '../types/Wish';

export function mapWishDtoToModel(dto: WishDto): Wish {
  return dto;
}
