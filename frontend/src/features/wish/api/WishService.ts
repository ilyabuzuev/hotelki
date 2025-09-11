import { api } from 'src/boot/axios';
import { mapWishDtoToModel } from './mappers/mapWishDtoToModel';
import type { WishDto } from './dto/WishDto';
import type { Wish } from './types/Wish';
import type { WishCreateDto } from './dto/WishCreateDto';

export class WishService {
  public static async getAllByCategory(category: string): Promise<Wish[] | undefined> {
    const res = await api.get<WishDto[]>(`wish/list/${category}`);
    if (res.status !== 200) return;
    return res.data.map(mapWishDtoToModel);
  }

  public static async create(wishCreateDto: WishCreateDto): Promise<Wish | undefined> {
    const res = await api.post<WishDto>('wish/create', wishCreateDto);
    if (res.status !== 201) return;
    return mapWishDtoToModel(res.data);
  }

  public static async delete(id: string): Promise<boolean | undefined> {
    const res = await api.delete<WishDto>('wish/delete', { data: { id } });
    console.log(res);

    if (!res) return;
    return true;
  }
}
