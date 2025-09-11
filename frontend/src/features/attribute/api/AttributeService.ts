import { api } from 'src/boot/axios';
import type { Attribute } from './types/Attribute';
import type { AttributeDto } from './dto/AttributeDto';
import { mapAttributeDtoToModel } from './mapAttributeDtoToModel';

export class AttributeService {
  public static async getListByCategory(category: string): Promise<Attribute[] | undefined> {
    const res = await api.get<AttributeDto[]>(`attribute/list/${category}`);
    if (!res) return;
    return res.data.map(mapAttributeDtoToModel);
  }
}
