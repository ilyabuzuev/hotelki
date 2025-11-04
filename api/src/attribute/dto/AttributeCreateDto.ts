import { AttributeType } from '@prisma/client';

export interface AttributeCreateDto {
    name: string;
    type: AttributeType;
}
