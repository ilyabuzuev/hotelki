import type { AttributeType } from '../types/AttributeType';

export interface AttributeDto {
  id: string;
  name: string;
  type: AttributeType;
  categoryId: string;
  createdAt: string;
  updatedAt: string;
}
