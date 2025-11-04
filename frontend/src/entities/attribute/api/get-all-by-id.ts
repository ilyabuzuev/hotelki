import { api } from 'src/app/boot/axios';
import { type IAttribute, type IAttributeDto } from '../model';

export const getAllById = async (id: string): Promise<IAttribute[]> => {
  const res = await api.get<IAttributeDto[]>(`attribute/list/${id}`);
  console.log(res.data);
  return res.data;
};
