import { type ICreateAttribute } from 'src/entities/attribute/@x/create-attrbiute';

export interface ICategoryCreate {
  name: string;
  value: string;
  attributes: ICreateAttribute[];
}
