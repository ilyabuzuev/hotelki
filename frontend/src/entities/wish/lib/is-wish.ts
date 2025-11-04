import type { IWish } from '../model';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isWishData = (data: any[]): data is { key: string; value: string }[] => {
  return (
    data && data.every((item) => typeof item.key === 'string' && typeof item.value === 'string')
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isWish = (dto: any): dto is IWish => {
  return (
    dto &&
    typeof dto.id === 'string' &&
    typeof dto.name === 'string' &&
    isWishData(dto.data) &&
    typeof dto.createdAt === 'string' &&
    typeof dto.updatedAt === 'string'
  );
};
